/* Operadores Lógicos:

AND (Y): &&                 // concatenar ' o " + variable.  
OR (O): ||                  /* != No es igual
Negación: !                  //   == es igual 
*/                          

var year = 2022;

if (year == 2018 ){
        console.log('No es igual al año 2018, realmente es '+year); // concatenamos.
}

const Year = 2022;
if (Year >= 2000 && Year <= 2022 && Year != 2018){
        console.log("Estamos en la era actual");
        
        }else {
        console.log("Estamos en la era post moderna");
        }


// OR
let years = 2028;
if(years != 2028 || (years == 2018 && years == 2028)){
        console.log("El año acaba en 8");
        
        }else{
         console.log("Año no registrado");
        }


        // Clase terminada!, pan comido.