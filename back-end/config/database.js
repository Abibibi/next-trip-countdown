const { Pool } = require('pg');

const config = {
  connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
  ssl: true
}

const pool = new Pool(config);

module.exports = {
    pool
}