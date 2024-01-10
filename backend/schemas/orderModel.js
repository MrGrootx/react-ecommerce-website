const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  cartItems: Array,
  amount: String,
  status: String,
  createdAt: Date,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
