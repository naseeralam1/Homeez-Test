const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "damalkor123",
  host: "localhost",
  port: "5434",
  database: "homeez",
});

module.exports = pool;
