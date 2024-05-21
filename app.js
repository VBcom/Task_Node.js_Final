const express = require("express");

const bodyParser = require("body-parser");

const usersRoutes = require("./routes/users");

const app = express();

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
