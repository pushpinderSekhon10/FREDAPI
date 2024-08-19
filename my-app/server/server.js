// const express = require('express')
// const cors = require('cors')
// const fredkeys = require('./routes/fredkeys');

// const app = express()
// const port = 3001

// app.use(cors());
// app.use(express.json());
// app.use("/fredkeys", fredkeys)

// app.get('/', (req, res) => {
//   res.status(200).send('successful response from server');
// })/*Test the response from the server */



// app.listen(port, () => {
//   console.log(`App running on port ${port}.`)
// })



const express = require('express');
const { Pool } = require('pg');

const app = express();


const cors = require('cors');


app.use(cors()); // Enable CORS for all routes

app.get('/fredkeys/GDP', (req, res) => {
  // Your route logic
  res.json({ data: 'Your data' });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
const port = 3001;

const pool = new Pool({
  connectionString: 'postgres://default:84mQjWBuYqtC@ep-wild-morning-a4csaw5b-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
});

app.get('/fredkeys/GDP', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM your_table'); // Replace with your query
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


