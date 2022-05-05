require('dotenv').config();
const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');


const PORT = process.env.PORT
const app = express();
app.use(cors())
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, './build')));
app.use('*', express.static(path.join(__dirname, './build')));



server.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`);
  });
