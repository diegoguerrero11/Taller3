// 1.	Realizar un programa que permita leer 2 números diferentes y nos diga cual es el mayor de los 2 números.

do{
var num1 = parseInt(prompt("ingrese  numero 1 "));
var num2 = parseInt(prompt("ingrese numero 2"));

if( num1!==num2){
    console.log(comparacion(num1,num2));
    break;
}
}while(true)

function comparacion(num1,num2){
    if(num1>num2){
        return `el numero 1: ${num1} es mayor que el numero 2:${num2}`;
     } else{
            return`el numero 2: ${num2} es mayor que el numero 1:${num1}`;
        }
    }



