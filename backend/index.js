

const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("./router/book.js");
const userRoute = require("./router/user.js");
const cors = require("cors")
// const bodyParser = require("bodyParser")


dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;

//database
try {
  mongoose.connect(
    MONGO_URL,
    // { useNewUrlParser: true, useUnifiedTopology: true },
    
  );
  console.log("connected to mongoDB")
} catch (err) {
  console.error(`Error connecting to the database ${err}`);
}
//cors
app.use(cors())

//parser
app.use(express.json());


app.use('/user', userRoute)
app.use('/book',bookRoute);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
