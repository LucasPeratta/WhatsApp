const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const routes = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

const server = app.listen(PORT, () => {
  console.log(`Server On en puerto ${PORT}`);
});

server.on("error", (err) => {
  console.log(err);
});
