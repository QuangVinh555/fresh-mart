import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
  {
    status: {
      type: Boolean,
      default: false,
    },
    id_user: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    message: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", TransactionSchema);
