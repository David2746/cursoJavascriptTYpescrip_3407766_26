let pedidos = [
  { nombre: "Carlos", peso: 0.8 },
  { nombre: "María", peso: 1.5 },
  { nombre: "Juan", peso: 2.7 },
  { nombre: "Ana", peso: 3.8 },
  { nombre: "Pedro", peso: 0.5 }
];

let totalCostos = 0;

for (let i = 0; i < pedidos.length; i++) {

    let costo = 0;

    if (pedidos[i].peso < 1) {
        costo = 4000;
    } else if (pedidos[i].peso <= 3) {
        costo = 8000;
    } else {
        costo = 14000;
    }

    console.log("Cliente: " + pedidos[i].nombre);
    console.log("Peso: " + pedidos[i].peso + " kg");
    console.log("Costo de envío: $" + costo);
    console.log("------------------------");

    totalCostos = totalCostos + costo;
}

console.log("Total recaudado: $" + totalCostos);