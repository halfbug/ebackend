const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();

mongoose
  .connect("mongodb+srv://freelanceUser:sadaf123@cluster0-h6by4.mongodb.net/naamscan?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(`E R R O R   A   H E A D -->  ${err}`));
app.use(cors());

console.log('client at : ');

app.get('/api/test', (req, res) => {
  res.send('hello world');
});

// Route files
const discount = require('./routes/discount');
// Mount routers
app.use('/api/discount', discount);

//port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
