const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");

const Shorten = require('./controllers/shorten');

app.use( cors({
  origin: ['http://localhost:3000','http://127.0.0.1:3000'],
  credentials: true
}));

app.use(express.json());
app.use('/', Shorten);

mongoose
  .connect(
    "mongodb+srv://cluster0-e3uk1.mongodb.net/test?retryWrites=true&w=majority",
    {
      dbName: "shortenUrl",
      user: "shubham",
      pass: "shubham",
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("The mongoose database is connected");
  });



app.get('/', (req, res) => {
    res.send('Hello World!')
  });
  
  app.listen(5000, () => {
    console.log('Example app listening on port 5000!')
  });
