const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/course');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Home Route for Render
app.get('/', (req, res) => {
  res.send('✅ SmartSeed Backend is Running!');
});

// ✅ API Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
