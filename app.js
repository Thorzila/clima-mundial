const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');
let comando = argv._[0];

switch(comando){
    case 'borrar':
        lugar.borrarDB(argv.borrar);
        break;

    case 'direccion':
        try {
            lugar.getLugar(argv.direccion).then((data)=>console.log(data));
        } catch (error) {
            console.log(error);
        }
        break;

    case 'listar':
        try {
            console.log(lugar.getListado());
        } catch (error) {
            console.log(error);
        }
        break;

    default: 
        console.log('Comando no reconocido');
}


