/* Las funciones anilladas tienen acceso a todas las variables que están declaradas en sus contextos
externos */

function funcion1() {
    var a = 2;

    function funcion3() {
        var b = 5;

        function funcion5() {
            console.log(a, b);
        }
    }
}



function funcion2() {
    var a = 7;
    function funcion4() {
        console.log(a);
    }
}

funcion1();
funcion2();


/* Funciones Básicas */

function sumar(a, b) {
    var suma = a + b;

    return suma;
}
console.log(sumar(10, 10));

//Otro Ejemplo.

function mostrarSaludo() {
    var mensaje = "Hola.. este código se ejecuta en una función"
}

console.log('mensaje')