let n = parseInt(prompt('Ingrese un numero entero positivo: '));
let suma = 0;

    for (let divisores = 1; divisores < n; divisores++){
        if (n%divisores == 0){
            suma = suma + divisores;
            console.log(`Divisor: ${divisores}`);
        }
    }
    if (suma == n){
        console.log(`La suma de sus divisores menos el mismo da ${suma} y es un numero perfecto`)
    } else{
        console.log(`La suma de sus divisores menos el mismo da ${suma} y el numero ${n} no es perfecto`)
    }