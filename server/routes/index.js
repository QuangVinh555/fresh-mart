import userRouter from "./user.js";
import categoryRouter from "./category.js";
import productRouter from "./product.js";
import transactionRouter from "./transaction.js";
import cartRouter from "./cart.js";
import orderRouter from "./order.js";

const route = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/category", categoryRouter);
  app.use("/api/product", productRouter);
  app.use("/api/transaction", transactionRouter);
  app.use("/api/cart", cartRouter);
  app.use("/api/order", orderRouter);
};

export default route;
