let productos = ["laptop", "mouse", "Teclado", "Monitor"];
console.log(productos[0]);
console.log(productos[2]);
console.log(productos[productos. length +1]); //Monitor
console.log([productos. length -2]); //Legth funcion contar elementos
let carrito = []; //array abierto
//arreglo los objetos mas comunes
let inventario = [
    {nombre: "laptop", precio: 2300000, stock:10}, //objeto
    {nombre: "mosuse", precio: 35000, stock:15},
    {nombre: "Teclado", precio: 55000, stock:20}
];
console.log (inventario [0].nombre);
console.log (inventario [0].precio);
console.log (inventario [0].stock);
//1. 
let carrito2 = ["portatil Lenovo", 3400000];

carrito2.push("teclado");
console.log(carrito2);
//2. pop elimina y retorna el final del array
let eliminado = carrito.pop();
console.log(eliminado);
console.log(carrito2);
//3. unshift agrega al inicio el primer elemento
carrito2.unshift("diademas");
console.log(carrito2);
//4. shift elimina y retorna el prime elemento
let primero = carrito2.shift();
console.log(primero);
console.log(carrito2);
//5. splice elimina o incerta en cualquier posicion
carrito2.splice(1,0, "WebCam");//en la posicion 1 elimina 0
console.log(carrito2);
carrito2.splice(0,1);//elimina un elemto desde la posicion 0
console.log(carrito2);
//subtema 3. metodos de interaccion (no mutan el array)
//estos metodos retornan un nuevo array, el original no se modifica
let precios=[125000, 300000, 450000, 650000];
//forEach - ejecuta una funcion por cada elemento
precios.forEach((precio,indice)=>{
    console.log(`producto ${indice+1}: $${precio.totaleString("Es-Co")}`);
});
//2. map transforma cada elemento del array y retorna un nuevo array 
//El array original no se modifica
let precioIVA= precios.map(precio=>Math.round(precio*1.19));
console.log(precioIVA);//precio cada elemento
console.log(precios);//precio sin cambios 
//3. filter para seleccionar elementos enun nuevo array mas pequeño
let premium=precios.filter(precio=>100000);
console.log(premium);
//4.find retorna el primer elemento que coincida con la busqueda
let busquedaProd=precios.find(precio=>precio==300000);
console.log(busquedaProd)
//5. reduce ||acomula todos los elementos en un solo valor
let sumaTotal=precios.reduce((acomulador, precio)=>{
    return acomulador+precio;
}, 0);
console.log(`suma: $${sumaTotal.toLocaleString("es-co")}`);
//reduce parsa encontrar el maximo valor
let maximo=precio.reduce((max,precio)=>precio>max?precio:max, 0)
console.log(`maximo:$${maximo.toLocaleString("es-co")}`);
