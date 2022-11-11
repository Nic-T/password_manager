const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

let db = require("./models");
const session = require("./middleware/session");

const SESSION_SECRET = process.env.SESSION_SECRET;

const app = express();
const port = process.env.PORT || 3100;

// app.set('trust proxy',1)

const authRoutes = require("./routes/auth");
const passRoutes = require("./routes/password");
const folderRoutes = require("./routes/folder");

app.use(session);
app.use(
  cors({
    origin: "http://localhost:3000",
    method: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/pass", passRoutes);
app.use("/api/folder", folderRoutes);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(port, () => {
    console.log(`App listening on ${port}`);
  });
});
