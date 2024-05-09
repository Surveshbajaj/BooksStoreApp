const express= require("express")
const router = express.Router();
const getBook = require('../controller/book')

router.get("/", getBook.getBookController);


module.exports = router;
