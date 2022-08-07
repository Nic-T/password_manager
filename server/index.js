const express = require("express");
const { sequelize } = require("./models");

const app = express();
const port = process.env.PORT || 3100;

const userRoutes = require("./routes/user");

app.use("api/user", userRoutes);

app.listen(port, async () => {
  `App runs on port ${port}`;
  await sequelize.sync({ force: true });
});
