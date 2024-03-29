import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    id_category: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
    },
    discount: {
      type: String,
    },
    image: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
