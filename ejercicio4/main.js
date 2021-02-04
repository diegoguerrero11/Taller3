let num1 = parseInt(prompt("Ingrese el numero 1"));
let num2 = parseInt(prompt("Ingrese el numero 2"));
let num3 = parseInt(prompt("Ingrese el numero 3"));

if (num1>num2 && num1>num3){
    console.log(`El numero 1 ${num1} es mayor que todos`);
} else if (num2>num1 && num1>num3){
    console.log(`El numero 2 ${num2} es mayor que todos`);
}else{
    console.log(`El numero 3 ${num3} es mayor que todos`);
}

if (num1<num2 && num1<num3){
    console.log(`El numero 1 ${num1} es menor que todos`);
} else if (num2<num1 && num1<num3){
    console.log(`El numero 2 ${num2} es menor que todos`);
}else{
    console.log(`El numero 3 ${num3} es menor que todos`);
}




