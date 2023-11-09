const { Schema, Model } = require("mongoose");

const user = new Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true
  },
  paymentMethod: {
    type: Array,
  },
});

module.exports = Model("User", user);
