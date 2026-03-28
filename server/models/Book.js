const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    isbn: { type: String, unique: true, trim: true },
    genre: { type: String, trim: true },
    publishedYear: { type: Number },
    totalCopies: { type: Number, default: 1, min: 0 },
    availableCopies: { type: Number, default: 1, min: 0 },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);