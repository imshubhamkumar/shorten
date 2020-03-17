const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");

const Shorten = require('./controllers/shorten');

app.use( cors({
  origin: ['https://5e7114d3fb36720008670344--jolly-shannon-25db88.netlify.com/','https://5e7114d3fb36720008670344--jolly-shannon-25db88.netlify.com/'],
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
  
  app.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));
