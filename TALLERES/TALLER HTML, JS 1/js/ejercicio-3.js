const estudiantes = [
    { nombre: "Ana", nota: 4.5 },
    { nombre: "Luis", nota: 3.2 },
    { nombre: "Juan", nota: 4.0 },
    { nombre: "Sara", nota: 2.8 },
    { nombre: "Pedro", nota: 5.0 },
    { nombre: "Maria", nota: 3.7 }
];

let suma = 0;
let aprobados = 0;
let mayor = estudiantes[0].nota;
let menor = estudiantes[0].nota;

for (const estudiante of estudiantes) {
    const estado = estudiante.nota >= 3.5 ? "APROBADO" : "REPROBADO";

    console.log(estudiante.nombre, estudiante.nota, estado);

    suma += estudiante.nota;

    if (estudiante.nota > mayor) mayor = estudiante.nota;
    if (estudiante.nota < menor) menor = estudiante.nota;
    if (estudiante.nota >= 3.5) aprobados++;
}

console.log("Promedio:", suma / estudiantes.length);
console.log("Mayor:", mayor);
console.log("Menor:", menor);
console.log("Aprobados:", aprobados);