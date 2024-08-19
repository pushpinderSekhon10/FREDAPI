const express = require('express');
const cors = require('cors'); // Make sure to require 'cors' before using it
const { Pool } = require('pg');

const app = express();
const port = 3001;

// 1. Set up CORS middleware to allow requests from your Vercel frontend
app.use(cors({
  origin: 'https://fredapi-pushpinder-sekhons-projects.vercel.app', // Replace with your frontend URL
}));

// 2. Set up PostgreSQL connection
const pool = new Pool({
  connectionString: 'postgres://default:84mQjWBuYqtC@ep-wild-morning-a4csaw5b-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
});

// 3. Define your route to handle requests
app.get('/fredkeys/GDP', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM your_table'); // Replace with your actual query and table name
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// 4. Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
