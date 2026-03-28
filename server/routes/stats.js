const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const Member = require('../models/Member');
const Borrow = require('../models/Borrow');

// GET dashboard stats
router.get('/', async (req, res) => {
  try {
    const [totalBooks, totalMembers, activeBorrows, overdueBooks] = await Promise.all([
      Book.countDocuments(),
      Member.countDocuments(),
      Borrow.countDocuments({ status: 'borrowed' }),
      Borrow.countDocuments({ status: 'overdue' }),
    ]);

    res.json({
      totalBooks,
      totalMembers,
      activeBorrows,
      overdueBooks,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;