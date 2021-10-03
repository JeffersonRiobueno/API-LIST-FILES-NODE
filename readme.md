# API
Esta api permite delvolver los directorios y archivos de una ubicación en especifico, Prueba realizada con NODE y express


### Docker

Para utilizarlce con docker: 

	docker run -dti --name NODE -v "$PWD":/app -p 3000:3000 node:10
	docker exec -ti NODE bash
	cd /app
	npm install express
    npm app.js 

Validar el puerto especificado en el archivo app.js

En el navegador colocar 
`http://localhost:3000/static/index.html`


### Configuración 

Modificar la variable `var path ="./assets/";` dentro del archivo app.js por la carpeta que desee listar su contenido.