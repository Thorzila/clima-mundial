var listado = [{"ciudad":"Moscu","lat":45.9,"lon":27.93,"temp":3.42},
{"ciudad":"Valencia","lat":39.33,"lon":-0.83,"temp":12.46},
{"ciudad":"Madrid","lat":40.42,"lon":-3.7,"temp":7.9}];

var index = listado.findIndex((obj)=> obj.ciudad == "Madrid");
console.log(`la posición de index es: ${index}`);
