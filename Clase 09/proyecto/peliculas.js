/*
El Tech Leader presenta al equipo un nuevo proyecto de compra y venta de
películas. Quiere que mostremos que tenemos claro cómo hacer para exportar e
importar nuestros propios módulos. Para ello, seguiremos los siguientes pasos:

a. Crear una carpeta llamada proyecto.
b. Dentro de ella crear un archivo llamado peliculas.js. Este archivo será un
módulo que contiene una lista con algunas de nuestras películas favoritas.
Para eso nos recomiendan crear un array de objetos literales. No olvides
que este archivo es un módulo propio y por tal motivo una vez que se crea...
¿cuál debería ser nuestra última línea de código?
Por cada película se necesita conocer esta información:
i. Identificador único de la película (id)
ii. Calificación por parte de los usuarios (rating)
iii. Premios (awards).
iv. Duración de la película (length).
v. Precio (price).
vi. Género de la película (genre):
1. Acción
2. Animación
3. Aventuras
4. Comedia
5. Suspenso.

c. Una vez creado el módulo anterior, crear un nuevo archivo (app.js). Piensa
cómo hacer para lograr importar nuestro módulo (peliculas.js). Luego,
utilizando lo que sabemos sobre ciclos o bucles, muestra al usuario un listado
con el detalle de cada una de nuestras películas favoritas.
*/

const uuid = require('uuid')

let peliculas = [
    {
        id: uuid.v4(),
        rating: 6,
        awards: 2,
        length: 1.40,
        price: 2100,
        genre: "Accion"
    },
    {
        id: uuid.v4(),
        rating: 7,
        awards: 4,
        length: 2.40,
        price: 2300,
        genre: "Animacion"
    },
    {
        id: uuid.v4(),
        rating: 8,
        awards: 5,
        length: 2.20,
        price: 2200,
        genre: "Aventuras"
    },
    {
        id: uuid.v4(),
        rating: 3,
        awards: 0,
        length: 1.30,
        price: 1800,
        genre: "Comedia"
    },
    {
        id: uuid.v4(),
        rating: 7.5,
        awards: 3,
        length: 2.40,
        price: 2250,
        genre: "Suspenso"
    }
];

module.exports = peliculas;