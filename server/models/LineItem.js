const mongoose = require('mongoose');

const lineItemSchema = new mongoose.Schema({
  description: String,
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  discount: { type: Number, default: 0 }, // percentage
  tax: { type: Number, default: 0 }       // percentage
}, { _id: false }); // embedded schema

module.exports = lineItemSchema;

