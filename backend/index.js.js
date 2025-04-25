const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Routes
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/course'); // ✅ NEW

dotenv.config();

const app = express();
app.use(cors()); // ✅ Enable CORS
app.use(express.json());

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes); // ✅ NEW

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(5000, () => {
      console.log('🚀 Server running at http://localhost:5000');
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
