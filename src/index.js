const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3001); //process env es el puerto que nos da algun dominio en la nube
app.set('json spaces', 2) //indentacion archivos json, pero ya andaba sin que pusiera esto

//Middleware 
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //true si los archivos fueran mas pesados

//Routes
app.use(require('./routes/index'))
app.use('/api/movies', require('./routes/movies')) //Asi agrego prefijos de ruta

//Start Server
app.listen(app.get('port'), () => {
    console.log(`Port on server ${app.get('port')}`);
})

