console.log("  bucle WHILE --------------------------------------------------------------------");

function buzzWhile () {
    let i = 0;
    
    while (i < 1000) {
    
        if (i %15 === 0) {
            console.log(i + " FIZZ-BUZZ!!!")
        } else if ( i % 3 === 0 ) {
            console.log(i + " Fizz!!!")
        } else if ( i % 5 === 0) {
            console.log(i +  " Buzz!!!")
        } else
    
        i++;
    }

}

console.log("  bucle FOR --------------------------------------------------------------------");

function buzzFor () {
    
    for( let i = 1; i < 1000; i++){
        if (i % 15 === 0) {
            console.log(i + " FIZZ-BUZZ!!!")
        } else if (i % 5 === 0) {
            console.log(i + " Buzz!!!")
        } else if (i % 3  === 0) {
            console.log(i + " Fizz!!!")
        }
    }

}