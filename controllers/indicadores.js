const getIndicadores = async (req,res) => {
    try {
        const todasCategorias = await pool.query('SELECT * FROM ind_fct_tasa_tipo_cambio');
        res.json(todasCategorias.rows);  
    } catch (error) {
        console.log(`oops something is wrong!.. the error is ${error.message}`)
    }
};

module.exports = getIndicadores; 

