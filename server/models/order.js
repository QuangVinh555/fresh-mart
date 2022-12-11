import mongoose from "mongoose";
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    id_transaction: {
      type: String,
      required: true,
    },
    id_product: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
