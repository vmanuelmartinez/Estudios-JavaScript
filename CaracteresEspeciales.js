/*
Caracteres especiales, lo que se implementará, esta será la referencia
\' — Comillas simples
\" — Comillas dobles
\n — Salto de línea
\\ — Doble barra 
\r — Espacio
\t — Tabulador horizontal
*/

console.log('1.- Comillas Simples:');
console.log("Víctor 'Manuel' Martinez");
console.log("Víctor 'Manuel' Martinez");

console.log('2.- Comillas Dobles:');
console.log('Víctor "Manuel" Martínez');

console.log('3.- Salto de línea:');
const urldoLinkedin = 'https://www.linkedin.com/in/victormanueldev/';
const aLink = 'Aqui está o meu Linkedin'.alink(urldoLinkedin);
console.log(`Buenas, soy Víctor\n${aLink}\nPor favor, compártelo!`);

console.log('4.- Doble barra:');
console.log(`c:\nuevo (incorrecto sin doble barra)`);
console.log(`c:\\nuevo`);


