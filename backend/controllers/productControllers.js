const ProductSchema = require("../schemas/productSchema");

// GET PRODUCTS API - /api/v1/products
exports.getProducts = async (req, res, next) => {
  const query = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const products = await ProductSchema.find(query);
  res.json({
    success: true,
    products,
  });
};

// GET SINGLE PRODUCTS API - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
  try {
    const product = await ProductSchema.findById(req.params.id);
    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Check that ID i cant able to GET",
    });
  }
};
