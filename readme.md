# Node Api

### Que Instalar
#### Nodemon
*La d es para que sea una dependencia de desarrollo
##### Instalar
```
npm install nodemon -D
```
##### Definir el archivo que al guardar se reinicie el servidor
Añadir "dev":"nodemon index.js", en el archivo packages.json en scripts  
o (no recomendado)
```
./node_modules/.bin/nodemon index.js
```