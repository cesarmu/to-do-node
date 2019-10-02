const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer.'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca de completado de la tarea.'
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea', { descripcion })
    .command('actualizar', 'Actualizar una tarea', { descripcion, completado })
    .command('listar', 'Listar todas las tareas', {})
    .command('borrar', 'Borrar una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por borrar.'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}