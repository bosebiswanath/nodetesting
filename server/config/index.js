const dotEnv = require("dotenv");

const { Console } = require("winston/lib/winston/transports");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  const file ="/var/www/html/nodejs/nodejstest/server/.env.dev";
  dotEnv.config({ path: file })
  } else {
  dotEnv.config();
}
module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
};