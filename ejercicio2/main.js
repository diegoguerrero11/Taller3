let numero=[];

parar:
do{
let n = parseInt(prompt("ingrese un numero"));
numero.push(n);
let opc = parseInt(prompt("deseas ingresar otro numero.\n 1. si. \n 2.no"));
switch (opc){
case 1:
    continue parar;
    case 2:
        console.log(`cantidad de nuemro ingresados ${numero.length}`);
        console.log(`${numero}`);
        break parar;
        default:
            alert("que idiota");
            break;
}

}while(true)




