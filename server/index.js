const express = require("express");
const cors = require("cors");
let bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3100;

const userRoutes = require("./routes/user");

let db = require("./models");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/user", userRoutes);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(port, () => {
    console.log(`App listening on ${port}`);
  });
});
