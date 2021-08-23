const express = require ('express');
const pool = require('../db');
const router = express.Router();

// -- todas las rutas aca empiezan con /indicadores 
// esta ruta obtiene todos los indicadores
router.get('/',  async (req,res) => {
    try {
        const todasCategorias = await pool.query('SELECT fecha,id_agencias_bolsa,cartera_us,cartera_bs FROM ind_cartera_clientes_agencia_bolsa_instrumento where fecha = (SELECT MAX(fecha) from ind_fct_tasa_tipo_cambio)');
        res.json(todasCategorias.rows);  
    } catch (error) {
        console.log(`Algo anda mal, el mensaje es: ${error.message}`)
    }
});
// esta ruta 'GET' un indicador en base a su campo ID
/* 
router.get('/:id',async (req,res) => {
    const {id} = req.params;
    try {
        const unIndicador = await pool.query(`SELECT * FROM ind_cartera_clientes_agencia_bolsa_instrumento WHERE id_cartera_clientes_agencia_bolsa_instrumento = ${id} `);       
        res.json(unIndicador.rows);
    }catch (error) {
        console.log(`Algo anda mal, el mensaje es en id: ${error.message}`)
    }
});
*/

router.get('/:instrumento',async (req,res) => {
    try {
        const unIndicador = await pool.query(`
        SELECT fecha,agencia,sum(cartera_us) as CarteraUS,sum(cartera_bs) as CarteraBs
        FROM ind_cartera_clientes_agencia_bolsa_instrumento 
        --Where fecha='2021-02-28'
        WHERE fecha = (SELECT MAX(fecha) from ind_cartera_clientes_agencia_bolsa_instrumento)        
        group by fecha,agencia
        order by agencia`);
        res.json(unIndicador.rows);
    }catch (error) {
        console.log(`Algo anda mal en caracter, el mensaje es: ${error.message}`)
    }
});


router.get('/:agencia',async (req,res) => {
    try {
        const unIndicador = await pool.query(`
        SELECT fecha,agencia,sum(cartera_us) as CarteraUS,sum(cartera_bs) as CarteraBS
        FROM ind_cartera_clientes_agencia_bolsa_instrumento 
        --Where fecha='2021-02-28'
        WHERE fecha = (SELECT MAX(fecha) from ind_cartera_clientes_agencia_bolsa_instrumento)        
        group by fecha,agencia
        order by agencia;`);
res.json(unIndicador.rows);
}catch (error) {
console.log(`Algo anda mal en caracter, el mensaje es: ${error.message}`)
}
});







router.get('/centroamerica',async (req,res) => {
    try {
        const unIndicador = await pool.query(`SELECT * FROM centroamerica`);
        /*const unIndicador = await pool.query(`SELECT * FROM ind_fct_tasa_tipo_cambio`);*/
        res.json(unIndicador.rows);
    }catch (error) {
        console.log(`Algo anda mal, el mensaje es: ${error.message}`)
    }
});




module.exports = router;
