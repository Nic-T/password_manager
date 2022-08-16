const redis = require("ioredis");

const redisClient = redis.createClient({
  port: 6379,
  host: "localhost",
});
redisClient.on("connect", () => {
  console.log("connected to redis successfully!");
});
redisClient.on("error", (error) => {
  console.log("Redis connection error :", error);
});
module.exports = redisClient;
