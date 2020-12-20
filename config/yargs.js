const argv = require('yargs')
    .command('direccion', 'Dirección de la ciudad para obtener el clima',{
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima(desc)'
        }
    })
    .command('borrar', 'Borrar una ciudad del listado',{
        borrar: {
            alias: 'b',
            desc: 'Borrar una ciudad del listado(desc)'
        }
    })
    .command('listar','Listar ciudades',{})
    .help()
    .argv;

module.exports = {
    argv
}