let estudiantes = [
    { nombre: "Laura", promedio: 4.8 },
    { nombre: "Carlos", promedio: 4.2 },
    { nombre: "Andrés", promedio: 3.8 },
    { nombre: "María", promedio: 3.2 },
    { nombre: "Juan", promedio: 2.9 }
];

let excelente = 0;
let bueno = 0;
let basico = 0;
let bajo = 0;

for (let i = 0; i < estudiantes.length; i++) {

    if (estudiantes[i].promedio >= 4.5) {
        console.log(estudiantes[i].nombre + ": Excelente");
        excelente++;
    } else if (estudiantes[i].promedio >= 3.5) {
        console.log(estudiantes[i].nombre + ": Bueno");
        bueno++;
    } else if (estudiantes[i].promedio >= 3.0) {
        console.log(estudiantes[i].nombre + ": Básico");
        basico++;
    } else {
        console.log(estudiantes[i].nombre + ": Bajo");
        bajo++;
    }
}

console.log("Excelente: " + excelente);
console.log("Bueno: " + bueno);
console.log("Básico: " + basico);
console.log("Bajo: " + bajo);