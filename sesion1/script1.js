console.log('Hola mundo');
/*sesion1: variables*/

let edad=25;    //let declara una variable
edad=30;
//let edad=20;
let nombre="andres";
console.log(nombre);

const PI=3.142598; //const mantiene el valor en todo el programa

//number numerico o decimal
const entero=50;
const decimal=31.40;
const negativo=-21;
console.log("numero entero: ");

//boolen solo tiene 2 estados falso o negativo
let estadoActivo=true;
let tienePermiso=false;

//mull ausencia intencional de valor
const resultado=null;

//undeFined - variable declara sin valor
let sinValor;
console.log(sinValor);

//typeof - tipo de valor
console.log(typeof -21);
console.log(typeof "Andres");

/*3. operadores arimeticos */
let a=20;
let b=10;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);//division
console.log(a%b);//modulo
console.log(a**b);//potencia

//operadores comparacion
console.log(5=="5");//true - igualdad de valor
console.log(5==="5");//false igualdad estricta usar siempre
console.log(5!=="3");//true - diferencia estricta
console.log(10>5);//true
console.log(3<=3);//true

//oporadores logicos
console.log("operadores logicos");
let email= "davidvaldez27466@gmail.com";
let pass= "123456";
//las dos condiciones deben ser verdaderas
console.log(false && false);//AND o Y si correo es v y password es v entonces ingreso
console.log(true || false);//OR almenos una condicion es verdadera
console.log(!true);//NOT niega el valor !

//operadores de asignacion
console.log("operadores de asignacion");

let contador=0;
contador=contador+4;
contador +=4
contador -=4
contador ++; //incremento en 1
contador --; //decremento en 1
console.log(contador);

//estructuras condicionales
//if else
let temperatura=36;

//si la temperatura es mayor a 35 grados entonces es un clima calido
if(temperatura > 35){
    console.log("Es un clima calido");
    //temperatura es menor a 35 grados entonces es un clima templado
}else if (temperatura >25){
    console.log("Es un clima templado");
}else if (temperatura <15){
    console.log("Es un clima frio");
}

//switch case
switch(dia){
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Es un día laboral", dia);
        break;
    case "sabado":
    case "domingo":
        console.log("fin de semana");
        break;
    default:
        console.log("día desconocido");
}

//operador ternario es la simplificacion de un if else
let edad2=17;
let tarjetaCredito= edad2 >= 18 ? "acceso permitido" : "acceso denegado";
console.log(tarjetaCredito);

let mensaje;
if(edad2 >= 18){
    mensaje="mayor de edad";
}else{
    mensaje="menor de edad";
}
console.log(mensaje);