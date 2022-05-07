require("dotenv").config();
const express = require("express");
const routes = require("./routes.js");
require("./database").connect();

const app = express();
app.use(express.json());
app.use(routes);

const PORT = process.env.PUBLIC_PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is running on port: ${PORT}`);
});