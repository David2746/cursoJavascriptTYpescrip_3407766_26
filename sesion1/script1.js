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