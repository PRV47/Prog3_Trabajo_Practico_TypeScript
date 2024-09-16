"use strict";
//Ejercicio 2
console.log("Ejercicio 2: corriendo desde typescript");
//Ejercicio 3
let texto = "Hola, TypeScript!";
let numero = 123;
let booleano = true;
let fecha = new Date("8/9/2024");
document.write(`
    <h2>Tipos de Datos</h2>
    <p>Texto: ${texto}</p>
    <p>Número: ${numero}</p>
    <p>Booleano: ${booleano}</p>
    <p>Fecha: ${fecha.toLocaleDateString()}</p>
    `);
//Ejercicio 4
function numACadena(num) {
    return num.toString();
}
let num = 456;
let cadena = numACadena(num);
document.write(`
    <p>Numero convertido a cadena: ${cadena}</p>
    `);
//Ejercicio 5
function sumaArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}
let arrayDeNumeros = [1, 2, 3, 4, 5];
let suma = sumaArray(arrayDeNumeros);
document.write(`
    <p>Suma del array: ${suma}</p>
    `);
//Ejercicio 6
let estudiante = {
    nombre: "Juan",
    edad: 20,
    curso: "Matematicas"
};
document.write(`
    <p>Estudiante: ${estudiante.nombre}</p>
    <p>Edad: ${estudiante.edad}</p>
    <p>Curso: ${estudiante.curso}</p>
    `);
let direccion = {
    calle: "Av. Principal",
    ciudad: "Ciudad",
    cp: 12345
};
document.write(`
    <p>Direccion: Calle: ${direccion.calle}, Ciudad: ${direccion.ciudad}, CP: ${direccion.cp}</p>
    `);
let ana = {
    nombre: "Ana",
    correo: "ana@gmail.com",
    saludar() {
        return `Hola, mi nombre es ${this.nombre}`;
    }
};
document.write(`
    <p>${ana.saludar()}</p>
    `);
//Ejercicio 9
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
    }
}
let carlos = new Persona("Carlos", 30);
document.write(`
    <p>${carlos.presentarse()}</p>
    `);
//Ejercicio 10
class Caja {
    constructor(contenido) {
        this.contenido = contenido;
    }
    obtenerContenido() {
        return this.contenido;
    }
}
let cajaDeTexto = new Caja("Mensaje secreto");
let cajaDeNumero = new Caja(42);
document.write(`
    <p>Contenido de cajaDeTexto: ${cajaDeTexto.obtenerContenido()}</p>
    <p>Contenido de cajaDeNumero: ${cajaDeNumero.obtenerContenido()}</p>
    `);
//Ejercicio 11
function identidad(param) {
    return param;
}
let numId = identidad(123);
let strId = identidad("texto");
document.write(`
    <p>Identidad del numero: ${numId}</p>
    <p>Identidad del texto: ${strId}</p>
    `);
//Ejercicio 12
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
let colorFavorito = Color.Azul;
document.write(`
    <p>Color favorito: ${Color[colorFavorito]}</p>
    `);
