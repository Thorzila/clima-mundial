const axios = require('axios').default;

const getLugar = async(direccion)=>{
    const instance = axios.create({ //instancia de la petición
        baseURL: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
          'q': direccion,
          'appid': '3d15719e2a0c946554e6520a95207477',
          'units':'metric'
        }
    });
    const resp = await instance.get();
    const ciudad = resp.data.name;
    const lat = resp.data.coord.lat;
    const lon = resp.data.coord.lon;
    const temp = resp.data.main.temp;
    return {
        direccion: ciudad,
        lat,
        lon,
        temp
    }
}

module.exports = {
    getLugar
}
