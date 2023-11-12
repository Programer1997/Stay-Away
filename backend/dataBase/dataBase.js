const mongoose = require('mongoose');

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    API_VERSION,
    IP_SERVER
} = require ('./constants.js');

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`);

const db = mongoose.connection;
// Este método escucha un evento y ejecutará la función de devolución de llamada cada vez que ese evento se dispare. Esto significa que si el evento "open" se dispara varias veces (lo que normalmente no debería ocurrir), la función de devolución de llamada se ejecutará cada vez.
db.on('error', (error) => {
  console.error('Error de conexión a la base de datos:', error);
});

db.once('open', () => {
  console.log('Conexión exitosa a la base de datos.');
});
