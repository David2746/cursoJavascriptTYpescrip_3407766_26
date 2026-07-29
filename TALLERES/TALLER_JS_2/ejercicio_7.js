let empleados = [
    { nombre: "Carlos", salario: 2500000 },
    { nombre: "María", salario: 3200000 },
    { nombre: "Pedro", salario: 1800000 },
    { nombre: "Ana", salario: 4100000 },
    { nombre: "Luis", salario: 2900000 }
];

let aumento = empleados.map(function(empleado) {
    return {
        nombre: empleado.nombre,
        salario: empleado.salario * 1.1
    };
});

console.log("Empleados con aumento:");
console.log(aumento);

let totalNomina = aumento.reduce(function(total, empleado) {
    return total + empleado.salario;
}, 0);

console.log("Total nómina: $" + totalNomina);