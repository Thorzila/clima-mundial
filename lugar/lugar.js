const axios = require('axios').default;
const fs = require('fs');
const colors = require('colors');
let listadoCiudades = [];

const cargarDB = ()=>{
    try {
        listadoCiudades = require('../db/lugares.json');
    } catch (error) {
        listadoCiudades = [];
    }
}

const guardarDB = ()=>{
    let data = JSON.stringify(listadoCiudades);
    fs.writeFile('./db/lugares.json', data, (err)=>{
        if(err){
            throw new Error('No se pudo almacenar', err);
        }else{
            console.log('======GUARDADO======'.green);
        }
    });
}

const borrarDB = (x)=>{
    cargarDB();
    try {
        var index = listadoCiudades.findIndex((obj)=> obj.ciudad == x);
        if(listadoCiudades.length>0 && index >= 0){
            listadoCiudades.splice(index,1);
            console.log(`Elemento con la dirección:'${x}', eliminado`.green);
            guardarDB();
            return true;
        }else if(listadoCiudades.length>0 && index == -1){
            throw new Error(`No se ha encontrado una ciudad con el nombre '${x}'`.red);
        }else {
            throw new Error('Listado vacío'.red);
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

const getLugar = async(nombre)=>{
    cargarDB();
    const instance = axios.create({ //instancia de la petición
        baseURL: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
          'q': nombre,
          'appid': '3d15719e2a0c946554e6520a95207477',
          'units':'metric'
        }
    });
    const resp = await instance.get();
    const ciudad = resp.data.name;
    const lat = resp.data.coord.lat;
    const lon = resp.data.coord.lon;
    const temp = resp.data.main.temp;
    const obj = {
        ciudad: ciudad,
        lat,
        lon,
        temp
    }
    listadoCiudades.push(obj);
    guardarDB();
    return obj;
}

const getListado = ()=>{
    cargarDB();
    return listadoCiudades;
}

module.exports = {
    getLugar,
    borrarDB,
    getListado
}
