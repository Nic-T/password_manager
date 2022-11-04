const session = require("express-session");
const dotenv = require("dotenv").config();
const connectRedis = require("connect-redis");
const redisClient = require("../config/redis");

const RedisStore = connectRedis(session);

module.exports = session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave:false,
  cookie: {
    sameSite:false,
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 30,
  },
});
