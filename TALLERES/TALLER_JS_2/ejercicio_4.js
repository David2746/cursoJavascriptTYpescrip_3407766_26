let inventario=[
    {nombre: "audifonos", precio: 1200, stock: 7},
    {nombre: "mouse", precio: 500, stock: 0},
    {nombre: "teclado", precio: 800, stock: 1},
    {nombre: "monitor", precio: 6000, stock: 5},
    {nombre: "USB", precio: 300, stock: 0},
    {nombre: "parlante", precio: 1500, stock: 2},
];
let disponibles = inventario.filter(p=>p.stock>0);

let etiquetas = disponibles.map(p =>`${p.nombre} - $${p.precio.toLocaleString("es-co")}`);
console.log(etiquetas)