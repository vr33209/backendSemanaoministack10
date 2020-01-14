const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://market:market@cluster0-csz4i.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
app.use(express.json());

app.use(routes);
app.listen(3000);