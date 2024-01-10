const orderSchema = require("../schemas/orderModel");

// CREATE ORDER - /api/v1/order
exports.createOrder = async (req, res, next) => {
  //   console.log(req.body, "DATA");
  const cartItems = req.body;
  const amount = Number(
    cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0)
  ).toFixed(2);
  //   console.log(amount);
  const status = "pending";

  const order = await orderSchema.create({ cartItems, amount, status });
  res.json({
    success: true,
    order
  });
};
