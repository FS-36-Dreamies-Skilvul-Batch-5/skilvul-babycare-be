require('dotenv').config();
const express = require("express");
const allRoutes = require("./routes");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); // Membuat Express App
const PORT = process.env.PORT || 3000; // Ambil PORT dari .env

app.use(cors());
app.use(express.json()); // Agar app dapat menerima json dari body disaat POST request
app.use(allRoutes); // Ambil semua route dari dari dir Routes
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Jalankan app atau server express
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
}) 