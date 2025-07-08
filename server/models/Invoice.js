const mongoose = require('mongoose');

// If your lineItemSchema is defined in the same file or a separate one, ensure proper import or define here:
const lineItemSchema = new mongoose.Schema({
  description: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  unitPrice: { type: Number, required: true, min: 0 },
  discount: { type: Number, default: 0, min: 0 },
  tax: { type: Number, default: 0, min: 0 }
});

const invoiceSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  items: [lineItemSchema],
  issueDate: {
    type: Date,
    default: Date.now
  },
  dueDate: Date,
  status: {
    type: String,
    enum: ['Paid', 'Unpaid', 'Overdue'],
    default: 'Unpaid'
  },
  notes: String,
  totalAmount: { // Optional but recommended for easier queries
    type: Number,
    required: true,
    default: 0,
    min: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoiceSchema);
