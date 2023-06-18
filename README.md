Iniciando el proyecto

1.Create the directory and start the node project with (npm init -y).
2.Create the structure of folders.

*public
    -css
    -img
*src
    *-controlers
    *-dataBase
    *-router
    app.js
*views
    *-partials

3.Install the frameworks that we'll need to use, 
for the moment express and ejs:
(npm i express)
(npm i ejs)
[Optional] we also can install nodemon (npm i nodemon)

So our structure must see like this:

*node_modules
*public
    -css
    -img
*src
    *-controlers
    *-dataBase
    *-router
    app.js
*views
    *-partials

.gitignore
package-lock.json
package.json

NOTE: Don't forget change the script onto package.json 
and also change the atribute main.

4.Require express and set the server:

a.Inside the app.js require express and set it through the variable app:  
-const express = require("express");
-const app = express();

b. Build the server through the method listen:
-app.listen(3000, () => {
  console.log("server running in the port 3000");
});





3.Instalamos las librerías que vamos a estar utilizando, de momento Express y EJS.
Creamos la carpeta src donde irá nuestro código.
Creamos el archivo app.js dentro de src, dentro requerimos Express e inicializamos un servidor con el método listen().
Corremos la aplicación y verificamos que el servidor corra correctamente.