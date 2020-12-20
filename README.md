## CONSUMIR API POR CONSOLA
Consumo de rest api para traer los datos de una ciudad (nombre,latitud,longitud,temperatura) cualquiera mediante la consola y almacenarlos localmente.

Ejecutar 'npm i' para crear los node_modules/

Agregar ciudad: 
````
node app direccion -d "Nombre de la ciudad"
````
Eliminar ciudad:
````
node app borrar -b "Nombre de la ciudad" 
//Ingresar el nombre de la ciudad de la misma forma que está almacenado, sensible a acentos, mayúsculas y espacios.
````
Listar ciudades: 
````
node app listar
````