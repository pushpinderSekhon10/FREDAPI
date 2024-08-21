const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3001;

// Use CORS middleware to allow requests from your Vercel frontend
app.use(cors());

app.options('*', cors());


// Set up PostgreSQL connection
const pool = new Pool({
  connectionString: 'postgres://default:84mQjWBuYqtC@ep-wild-morning-a4csaw5b-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
});

// Define your route to handle requests
app.get('/fredkeys/GDP', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM your_table'); // Replace with your actual query and table name
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Server error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
