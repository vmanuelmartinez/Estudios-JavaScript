/* Ejercicio que pide dos números y que nos diga, cual es mayor, cual es menor,
y si son iguales */

var numero1 = parseInt(prompt("Introduce el primer número", 0))
var numero2 = parseInt(prompt("Introduce el segundo numero", 0))

// Si fuesen menores que cero (0), y si no es un numero, vuélvelo a pedir.
while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){

 numero1 = parseInt(prompt("Introduce el primer número", 0))
 numero2 = parseInt(prompt("Introduce el segundo numero", 0))

}

if(numero1 == numero2){
    alert("Los numeros son iguales")
}else if(numero1 > numero2){
    alert("El numero mayor es: " + numero1)
    alert("El numero menor es: " + numero2);

}else if(numero2 > numero1){
    alert("El numero mayor es: " + numero2)
    alert("El numero menor es: " + numero1);
} else{
    alert("Introduce numeros correctos")
}

    
