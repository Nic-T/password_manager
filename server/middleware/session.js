const session = require("express-session");
const connectRedis = require("connect-redis");
const redisClient = require("../config/redis");

const RedisStore = connectRedis(session);

module.exports = session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 30,
  },
});
