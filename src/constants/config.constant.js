require('dotenv').config();

const DB_URL = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@alpha.h0q6rdf.mongodb.net/alpha?retryWrites=true&w=majority`;

module.exports = {
  DB_URL,
};
