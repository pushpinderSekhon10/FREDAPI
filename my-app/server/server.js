const express = require('express')
const cors = require('cors')
const fredkeys = require('./routes/fredkeys');

const app = express()
const port = 3001

app.use(cors());
app.use(express.json());
app.use("/fredkeys", fredkeys)

app.get('/', (req, res) => {
  res.status(200).send('successful response from server');
})/*Test the response from the server */



app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})