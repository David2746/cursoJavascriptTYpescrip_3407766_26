let ventas = [
    { vendedor: "Carlos", ventas: 15 },
    { vendedor: "María", ventas: 22 },
    { vendedor: "Pedro", ventas: 9 },
    { vendedor: "Ana", ventas: 30 },
    { vendedor: "Luis", ventas: 18 }
];

let mejorVendedor = ventas.find(function(vendedor) {
    return vendedor.ventas >= 30;
});

let mayoresDiez = ventas.filter(function(vendedor) {
    return vendedor.ventas > 10;
});

let totalVentas = ventas.reduce(function(total, vendedor) {
    return total + vendedor.ventas;
}, 0);

console.log("Mejor vendedor:");
console.log(mejorVendedor);

console.log("Vendedores con más de 10 ventas:");
console.log(mayoresDiez);

console.log("Total de ventas: " + totalVentas);