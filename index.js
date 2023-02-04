function closures(x) { 
    console.log(`sum(${x}) = ${x}`); 
    return function (y) { 
        result = x + y
        console.log(`sum(${y}) = ${result}`); 
        return function (f) { 
             const resultTwo = result + f; 
            console.log(`sum(${f}) = ${resultTwo}`) 
            } 
        } 
    } 
closures(3)(5)(20)

