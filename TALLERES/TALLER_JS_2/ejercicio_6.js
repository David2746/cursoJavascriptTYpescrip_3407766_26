let carrito = [
    { titulo: "El Principito", precio: 40000 },
    { titulo: "Cien años de soledad", precio: 70000 }
];

carrito.push({
    titulo: "Hábitos Atómicos",
    precio: 65000
});

carrito.pop();

let titulos = carrito.map(function(libro){
    return libro.titulo;
});

let total = carrito.reduce(function(acum,libro){
    return acum + libro.precio;
},0);

console.log(carrito);
console.log(titulos);
console.log("Total a pagar: $" + total);