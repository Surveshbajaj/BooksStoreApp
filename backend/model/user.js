const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const user = mongoose.model("User", userSchema);
// export default user;
module.exports = user;
