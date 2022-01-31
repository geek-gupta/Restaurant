const express = require('express');
const bodyparse = require('body-parser');
const PORT = require('./config').PORT;
const router = require('./routes/index');
const catRouter = require('./routes/cat');
const mongoose = require('mongoose');

const app = express();

app.use(bodyparse.urlencoded({extended: true}));
app.use(bodyparse.json());

app.use('/', router);
app.use('/cats', catRouter);
app.listen(PORT, (err) => {
    main().catch(err => console.log(err));
    console.log("Server started at PORT: ", PORT)
})

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
  }