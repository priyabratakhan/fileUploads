const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//     age: { type: String, required: true },
  profilePic:[{type:String, required:true}],
});

// const profilePicSchema = 
module.exports = mongoose.model("user", userSchema);