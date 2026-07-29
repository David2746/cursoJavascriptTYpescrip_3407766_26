let pedidos = [
    { mesa: 1, plato: "Bandeja", valor: 45000 },
    { mesa: 2, plato: "Salmón", valor: 65000 },
    { mesa: 3, plato: "Pizza", valor: 50000 }
];

let pedido = pedidos.find(function(p){
    return p.valor > 50000;
});

let economicos = pedidos.filter(function(p){
    return p.valor <= 50000;
});

let total = pedidos.reduce(function(acum,p){
    return acum + p.valor;
},0);

console.log(pedido);
console.log(economicos);
console.log("Total: $" + total);