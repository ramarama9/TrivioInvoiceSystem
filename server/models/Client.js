const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  companyName: { type: String, trim: true },
  email: { type: String, trim: true, lowercase: true },
  billingAddress: { type: String, trim: true },
  taxId: { type: String, trim: true },
}, { timestamps: true });

module.exports = mongoose.model('Client', clientSchema);

