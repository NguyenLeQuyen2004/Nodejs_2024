import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: "categories",
  },
});

export default mongoose.model("products", productSchema);
