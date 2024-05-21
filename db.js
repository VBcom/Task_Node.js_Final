const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/usersDB", {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});
