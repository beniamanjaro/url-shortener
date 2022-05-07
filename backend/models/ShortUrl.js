const mongoose = require("mongoose");

const ShortUrlSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  alias: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("ShortUrl", ShortUrlSchema);
