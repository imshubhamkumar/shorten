const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Shorten = require('./controllers/shorten');



app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
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
