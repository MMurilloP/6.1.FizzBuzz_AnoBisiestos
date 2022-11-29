function esBisiesto(año){
    if(año % 400 === 0) {
        console.log(año + " es bisiesto.");
    } else if (año % 100 === 0) {
        console.log(año + " no es bisiesto.");
    } else if (año % 4 === 0) {
        console.log(año + " es bisiesto.");
    } else {
        console.log(año + " no es bisiesto.");
    }
}

esBisiesto();
