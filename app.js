const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
lugar.getLugar(argv.direccion).then((data)=>{
    console.log(data);
}).catch((e)=>console.log(e));