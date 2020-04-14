const opcciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opcciones)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opcciones)
    .argv;



module.exports = { argv }