const express = require ('express');
const pool = require('../db');
const router = express.Router();



// importar tus archivos aca
//const tasasDeCambio = require('./tasasDeCambio.js');
// -- todas las rutas aca empiezan con /indicadores 
// esta ruta obtiene todos los indicadores
//app.use('/tasas',tasasDeCambio); // (/ruta, tu archivo )



// -- todas las rutas aca empiezan con /indicadores 
// esta ruta obtiene todos los indicadores
router.get('/',  async (req,res) => {
    try {
        const todasCategorias = await pool.query('SELECT fecha,pais,codigo_iso,cambio_dolar FROM ind_fct_tasa_tipo_cambio where fecha = (SELECT MAX(fecha) from ind_fct_tasa_tipo_cambio)');
        res.json(todasCategorias.rows);  
    } catch (error) {
        console.log(`Algo anda mal, el mensaje es total: ${error.message}`)
    }
});
// esta ruta 'GET' un indicador en base a su campo ID 

/*
router.get('/:id',async (req,res) => {
    const {id} = req.params;

    try {
        const unIndicador = await pool.query(`SELECT * FROM ind_fct_tasa_tipo_cambio WHERE id_tasa_tipo_cambio = ${id} `);
        //const unIndicador = await pool.query(`SELECT * FROM ind_fct_tasa_tipo_cambio`);
        res.json(unIndicador.rows);
    }catch (error) {
        console.log(`Algo anda mal, el mensaje es este: ${error.message}`)
    }
});
*/
module.exports = router;
