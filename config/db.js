const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'shopfy_db',
  password: 'Rohith1227',
  port: 5432,
});

module.exports = pool;