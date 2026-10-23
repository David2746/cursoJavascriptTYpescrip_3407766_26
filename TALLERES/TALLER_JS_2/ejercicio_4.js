let productos = [
    { nombre: "Portátil", precio: 2500000, stock: 5 },
    { nombre: "Mouse", precio: 80000, stock: 10 },
    { nombre: "Teclado", precio: 150000, stock: 0 },
    { nombre: "Monitor", precio: 900000, stock: 3 }
];

let disponibles = productos.filter(function(producto){
    return producto.stock > 0;
});

let nombres = disponibles.map(function(producto){
    return producto.nombre;
});

let total = disponibles.reduce(function(acum, producto){
    return acum + producto.precio * producto.stock;
},0);

console.log(disponibles);
console.log(nombres);
console.log("Total inventario: $" + total);