const express = require('express');
const router = express.Router();
const Borrow = require('../models/Borrow');
const Book = require('../models/Book');
const Member = require('../models/Member');

// GET all borrows (optionally filter by member or status)
router.get('/', async (req, res) => {
  try {
    const { memberId, bookId, status } = req.query;
    const filter = {};
    if (memberId) filter.member = memberId;
    if (bookId) filter.book = bookId;
    if (status) filter.status = status;

    const borrows = await Borrow.find(filter)
      .populate('book', 'title author isbn')
      .populate('member', 'name email')
      .sort({ borrowedAt: -1 });

    res.json(borrows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single borrow
router.get('/:id', async (req, res) => {
  try {
    const borrow = await Borrow.findById(req.params.id)
      .populate('book')
      .populate('member');
    if (!borrow) return res.status(404).json({ error: 'Borrow record not found' });
    res.json(borrow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST borrow a book
router.post('/', async (req, res) => {
  try {
    const { bookId, memberId, dueDate } = req.body;

    // Check book exists and has copies
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    if (book.availableCopies < 1)
      return res.status(400).json({ error: 'No available copies' });

    // Check member exists and is active
    const member = await Member.findById(memberId);
    if (!member) return res.status(404).json({ error: 'Member not found' });
    if (member.membershipStatus !== 'active')
      return res.status(400).json({ error: 'Member is not active' });

    // Create borrow record
    const borrow = new Borrow({
      book: bookId,
      member: memberId,
      dueDate: dueDate || new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // default 14 days
    });
    await borrow.save();

    // Decrement available copies
    book.availableCopies -= 1;
    await book.save();

    await borrow.populate('book', 'title author');
    await borrow.populate('member', 'name email');
    res.status(201).json(borrow);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT return a book
router.put('/:id/return', async (req, res) => {
  try {
    const borrow = await Borrow.findById(req.params.id);
    if (!borrow) return res.status(404).json({ error: 'Borrow record not found' });
    if (borrow.status === 'returned')
      return res.status(400).json({ error: 'Book already returned' });

    borrow.returnedAt = new Date();
    borrow.status = 'returned';
    await borrow.save();

    // Increment available copies
    await Book.findByIdAndUpdate(borrow.book, { $inc: { availableCopies: 1 } });

    await borrow.populate('book', 'title author');
    await borrow.populate('member', 'name email');
    res.json(borrow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT mark overdue borrows (utility route — can be called by a cron job)
router.put('/mark-overdue', async (req, res) => {
  try {
    const result = await Borrow.updateMany(
      { status: 'borrowed', dueDate: { $lt: new Date() } },
      { $set: { status: 'overdue' } }
    );
    res.json({ message: `${result.modifiedCount} records marked as overdue` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE borrow record
router.delete('/:id', async (req, res) => {
  try {
    const borrow = await Borrow.findByIdAndDelete(req.params.id);
    if (!borrow) return res.status(404).json({ error: 'Borrow record not found' });
    res.json({ message: 'Borrow record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;