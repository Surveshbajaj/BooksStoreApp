const Book = require("../model/book");


module.exports.getBookController = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};

