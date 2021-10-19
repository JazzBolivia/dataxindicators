const Pool = require("pg").Pool;

/*
const pool = new Pool({
    user: "postgres",
    password: "datax",
    database: "SPIM_M",
    host: "181.115.167.239",
    port: 5432
});

*/
/*
const pool = new Pool({
    user: "postgres",
    password: "datax",
    database: "SPIM",
    host: "10.0.0.9",
    port: 5432
});

*/


/*
const pool = new Pool({
    user: "postgres",
    password: "datax",
    database: "SPIM_M",
    host: "127.0.0.1",
    port: 5432
});
*/





const pool = new Pool({
    user: "dataxcom_moises",
    password: ".SPIM-1289$moises",
    database: "dataxcom_dataxweb2",
    host: "50.87.177.88",
    port: 5432
});

module.exports = pool;
