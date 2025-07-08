const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/connectDB');
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/invoices', invoiceRoutes);

// Optional base route
app.get('/', (req, res) => {
  res.send('✅ API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
