import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    id_user: {
      type: String,
      required: true,
    },
    id_product: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", CartSchema);
