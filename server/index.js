const express = require('express');
const conectarDB = require('./config/db')
const config = require('./config/global');
const cors = require('cors');

const app = express();

//Conectar BD
conectarDB();

app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));
app.use('/api/login', require('./routes/usuario'));
app.use('/api/create-user', require('./routes/usuario'));
app.use('/api/generate-pdf',require('./routes/pdf'))
app.use('/api',require('./routes/cine'))
app.use('/api',require('./routes/tarifa'))
app.use('/api',require('./routes/pelicula'))
app.use('/api',require('./routes/pasa'))
app.use('/api',require('./routes/pdf'))


app.listen(config.port, () => {
    console.log('El servidor por el puerto 3000')
})