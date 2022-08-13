const express = require("express");
const cors = require("cors");
const redis = require("redis");
const connectRedis = require("connect-redis");
const dotenv = require("dotenv").config();
const session = require("express-session");

let db = require("./models");

const SESSION_SECRET = process.env.SESSION_SECRET;

const app = express();
const port = process.env.PORT || 3100;

// app.set('trust proxy',1)

const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
  port: 6379,
  host: "localhost",
});

const userRoutes = require("./routes/auth");

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 30,
    },
  })
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", userRoutes);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(port, () => {
    console.log(`App listening on ${port}`);
  });
});
