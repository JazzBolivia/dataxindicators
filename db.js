const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "datax",
    database: "SPIM",
    host: "10.0.0.9",
    port: 5432
});

/*
const pool = new Pool({
    user: "dataxcom_moises",
    password: ".SPIM-1289$moises",
    database: "dataxcom_dataxweb2",
    host: "50.87.177.88",
    port: 5432
});
*/
module.exports = pool;