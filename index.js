const express = require ('express');
const bodyParser = require ('body-parser');
const indicadoresRoute = require('./routes/indicadores.js');
const tasasDeCambio = require('./routes/tasasDeCambio.js');
const agencia_instrumento = require('./routes/agencia_intrumento.js');

//Deploy pstgresql api to Bluehost// heroku
// Node, Express, Postgresl PERN (-React)

// importando la configuracion para la base de datos
const pool = require('./db');
const { url } = require('inspector');

// inicializando la aplicacion
const app = express();
// especificando un puerto, puede ser cualquier numero 
// const PORT = 5000;
var PORT = process.env.PORT || 5000;

// inicializando el middleware necesario para el parser
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
//especificando la ruta 
// /indicadores -> 
app.use('/indicadores',indicadoresRoute);
//----------------------------------------------------------
// ACA EMPIEZA LA CORRECION 
// HAY QUE IMPORTAR LAS RUTAS A ESTE ARCHIVO, NO AL INDICADORES.JS
//----------------------------------------------------------
app.use('/tasasdecambio', tasasDeCambio); // local/cambios/
app.use('/agencia_instrumento', agencia_instrumento); // local/cambios/
//----------------------------------------------------------
// ACA TERMINA LA CORRECION 
//----------------------------------------------------------
//'/' route
//creando la ruta '/'
app.get('/',(req,res) => {
    res.send('<h1>Aqui https://api-datax-indicators.herokuapp.com/   deberia haber informacion importante de la API </h1> <br> <h3>El objetivo de esta API podria cumplir los mismos de las API disponibles de Bloomberg </h3><p> Tenemos que trabajar en la documentacion para los usuarios tecnicos</p>');
  
});
// aqui escuchando en el puerto previsto 
app.listen(PORT, ()=> console.log(`Servidor corriendo en el puerto: http://localhost${PORT}`));


