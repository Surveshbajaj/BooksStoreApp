const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
