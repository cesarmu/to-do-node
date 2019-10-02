const argv = require('./config/yargs').argv;
const porHacer = require('./to-do/to-do');



let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = [];
        listado = porHacer.obtenerListado();

        for (let tarea of listado) {
            console.log('===================='.green);
            console.log(`Tarea: "${tarea.descripcion}"`);
            console.log(`Estado: "${tarea.completado}"`);
            console.log('===================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualizado) console.log(`Tarea: "${argv.descripcion}", actualizada con éxito.`);
        else console.log(`La tarea "${argv.descripcion}", no existe.`);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) console.log(`Tarea: "${argv.descripcion}", borrada con éxito.`);
        else console.log(`La tarea "${argv.descripcion}", no existe.`);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}