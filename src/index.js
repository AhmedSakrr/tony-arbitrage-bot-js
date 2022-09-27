const app = require("./app");
const connectWithDb = require("./api/config/db");
const logger = require("./api/logger");
require("dotenv").config();

connectWithDb();

app.listen(process.env.PORT, () => {
  logger.info(`Server is running at port :${process.env.PORT}`);
});
