import mongoose from "mongoose";
function validateEmail(textEmail) {
  return /^\S+@\S+\.\S+$/.test(textEmail);
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Không được để trống name"],
    lowercase: true,
    trim: true,
    minLength: [2, "Can toi thieu 2 ky tu"],
    maxLength: [10, "Toi da 10 ky tu"],
  },
  age: {
    type: Number,
    min: [1, "Toi thieu la 1 tuoi"],
    max: [100, "Toi da la 100 tuoi"],
  },
  email: {
    type: String,
    unique: [true, "Da ton tai email"],
    // default: "quyennlph37238@fpt.edu.vn",
    validate: {
      validator: validateEmail,
      message: "Khong dung dinh dang email",
    },
  },
  gender: {
    type: Boolean,
    default: true,
  },
  password: {
    type: String,
    require: [true, "Khong dc de trong password"],
    minLength: [6, "password khong dc nho hon 6 ky tu"],
  },
});

export default mongoose.model("users", userSchema);
