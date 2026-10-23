function procesarRetiro(nombre, saldo, retiro) {
    if (retiro <= 0) {
        return { mensaje: "El monto debe ser mayor a cero" };
    }

    if (saldo >= retiro) {
        return {
            exito: true,
            saldoAnterior: saldo,
            retiro,
            nuevoSaldo: saldo - retiro
        };
    }

    return {
        exito: false,
        falta: retiro - saldo
    };
}

const resultado = procesarRetiro("David", 500000, 100000);

console.log(resultado);