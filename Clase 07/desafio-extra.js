/*
1. Crear una función que pida un valor por parámetro y muestre los 10 números
siguientes.
2. Imprimir los números entre el 1 y el 57, saltando de tres en tres.
3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el
100.
4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
las letras de la cadena de texto pero en MAYÚSCULA.
Pista: Investigar el método .toUpperCase.
5. Crear una función que reciba como parámetro un array de números positivos. Tendrá
la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
Pista: Investiga sobre el uso del operador módulo. Recordemos también que un
número par es aquel que se puede dividir entre 2.
*/

/* 1)
function numSiguientes (numero){
    let siguiente = 0;
    for (let i = 0; i < 11; i++) {
        siguiente = numero + i; 
        console.log(siguiente);
    }
};
(numSiguientes(1));
*/  

/* 2)
let salto = 1;
while (salto <= 57) {
    console.log(salto);
    salto = salto + 4;
};
*/

/* 3)
let res = 0;
for (let i = 0; i <= 100; i++) {
    res = res + i;
}
console.log(res);
*/