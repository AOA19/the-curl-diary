const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  catergory: {
    type: String,
    enum: ["product", "tool"],
    required: true,
  },
  hairTypes: {
    type: String,
    enum: ["wavy", "curly", "coily"],
  },
});


module.exports = mongoose.model("Product", ProductSchema);