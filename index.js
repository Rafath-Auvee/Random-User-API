const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const userRoutes = require("./routes/v1/user.route.js");

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.all("*", (req, res) => {
  res.send("NO route found.");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
