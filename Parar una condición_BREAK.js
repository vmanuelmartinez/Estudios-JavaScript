// Como parar una condición usando BREAK

var year = 2010;

while (year <= 2050){ // Declaramos que cuando 2010 sea menor o igual que 2050
                     // imprima el console.log.
                     
        console.log("Estamos en el año: "+year)
        year++;

        if (year == 2030){ // de esta forma, podemos parar una condición.
                break
        }
} 
