const mongoose = require('mongoose');

const lineItemSchema = new mongoose.Schema({
  description: String,
  quantity: Number,
  unitPrice: Number,
  tax: Number,
  discount: Number,
});

const invoiceSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  items: [lineItemSchema],
  issueDate: {
    type: Date,
    default: Date.now,
  },
  dueDate: Date,
  status: {
    type: String,
    enum: ['Paid', 'Unpaid', 'Overdue'],
    default: 'Unpaid',
  },
  notes: String,
  totalAmount: Number,
});

module.exports = mongoose.model('Invoice', invoiceSchema);
