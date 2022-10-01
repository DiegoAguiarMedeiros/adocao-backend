// In this file you can configure migrate-mongo
const dotenv = require('dotenv');

dotenv.config();

const { MONGO_HOST, MONGO_USER, MONGO_PASSWORD, MONGO_URL } = process.env;

const MONGO_DB_URL = MONGO_URL 
  ? MONGO_URL
  : `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}`;

const config = {
  mongodb: {
    url: MONGO_DB_URL,
    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      useUnifiedTopology: true, // removes a deprecating warning when connecting
      //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
      //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
    },
  },

  // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',
  migrationFileExtension: '.js',
};

// Return the config as a promise
module.exports = config;
