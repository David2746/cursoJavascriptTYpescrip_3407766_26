const ventas = [
    { dia: "Lunes", vendedor: "Ana", unidades: 12, totalVendido: 300000 },
    { dia: "Martes", vendedor: "Luis", unidades: 8, totalVendido: 200000 },
    { dia: "Miércoles", vendedor: "Juan", unidades: 15, totalVendido: 450000 },
    { dia: "Jueves", vendedor: "Sara", unidades: 6, totalVendido: 180000 },
    { dia: "Viernes", vendedor: "Pedro", unidades: 11, totalVendido: 320000 }
];

function totalSemana() {
    return ventas.reduce((acc, venta) => acc + venta.totalVendido, 0);
}

function mejorDia() {
    return ventas.reduce((mayor, actual) =>
        actual.totalVendido > mayor.totalVendido ? actual : mayor
    );
}

function diasDestacados() {
    return ventas.filter(venta => venta.unidades > 10);
}

function imprimirReporte() {
    console.log("Total semana:", totalSemana());
    console.log("Mejor día:", mejorDia());
    console.log("Días destacados:", diasDestacados());
}

imprimirReporte();