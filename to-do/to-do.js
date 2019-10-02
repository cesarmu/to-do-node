const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('Error al guardar.')
        else
            'Tarea guardada.' //resolve(`Tarea: "${data.descripcion}", guardada.`)
    });
}

const cargarListadoDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const obtenerListado = () => {
    cargarListadoDB();
    return listadoPorHacer;
}

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    }
    cargarListadoDB();
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarListadoDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true
    } else {
        return false
    }
}

const borrar = (descripcion) => {
    cargarListadoDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    obtenerListado,
    actualizar,
    borrar
}