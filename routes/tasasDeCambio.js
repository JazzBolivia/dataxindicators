const express = require ('express');
const pool = require('../db');
const router = express.Router();

// -- all the routes here start with indicadores/ 
// obtains all indicadores
router.get('/',  async (req,res) => {
    try {
        const todasCategorias = await pool.query('SELECT fecha,pais,codigo_iso,cambio_dolar FROM ind_fct_tasa_tipo_cambio where fecha = (SELECT MAX(fecha) from ind_fct_tasa_tipo_cambio)');
        res.json(todasCategorias.rows);  
    } catch (error) {
        console.log(`Algo anda mal, el mensaje es total: ${error.message}`)
    }
});
router.get('/exportaciones',  async (req,res) => {
    try {
        const todasCategorias = await pool.query('SELECT * FROM exportacion');
        res.json(todasCategorias.rows);  
    } catch (error) {
        console.log(`Algo anda mal, el mensaje es: ${error.message}`)
    }
});

// Getting a single indicador based on the ID
router.get('/tipos-de-cambio:id',async (req,res) => {
    const {id} = req.params;

    try {
        const unIndicador = await pool.query(`SELECT * FROM tipos-de-cambio WHERE id_tipos-de-cambio = ${id}`);
        res.json(unIndicador.rows);
    }catch (error) {
        console.log(`Algo anda mal, el mensaje es: ${error.message}`)
    }
});
router.get('/exportaciones:id',async (req,res) => {
    const {id} = req.params;

    try {
        const unIndicador = await pool.query(`SELECT * FROM exportacion WHERE id_exportacion = ${id} `);
        res.json(unIndicador.rows);
    }catch (error) {
        console.log(`Algo anda mal, el mensaje es: ${error.message}`)
    }
});

module.exports = router;
