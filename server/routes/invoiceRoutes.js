const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');

// Create invoice
router.post('/', async (req, res) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all invoices
router.get('/', async (req, res) => {
  try {
    const invoices = await Invoice.find().populate('client').populate('lineItems');
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get invoice by ID
router.get('/:id', async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id).populate('client').populate('lineItems');
    if (!invoice) return res.status(404).json({ message: 'Invoice not found' });
    res.json(invoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update invoice
router.put('/:id', async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!invoice) return res.status(404).json({ message: 'Invoice not found' });
    res.json(invoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete invoice
router.delete('/:id', async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndDelete(req.params.id);
    if (!invoice) return res.status(404).json({ message: 'Invoice not found' });
    res.json({ message: 'Invoice deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
