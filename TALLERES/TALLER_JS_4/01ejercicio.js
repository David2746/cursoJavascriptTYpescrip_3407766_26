class Cliente {
    constructor(id, nombre, email, membresia = "Silver") {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.membresia = membresia;
        this.historial = [];
    }

    agregarCompra(valor) {
        this.historial.push(valor);
    }

    totalGastado() {
        let total = 0;

        for (let compra of this.historial) {
            total += compra;
        }

        if (total > 5000000) {
            this.membresia = "Gold";
        }

        return total;
    }

    descuento() {
        return this.membresia == "Gold"
            ? "Descuento del 20%"
            : "Descuento del 10%";
    }

    descripcion() {
        return `${this.nombre} | ${this.membresia} | Total: ${this.totalGastado()}`;
    }
}

let cliente1 = new Cliente(1, "David", "david@gmail.com");

cliente1.agregarCompra(2000000);
cliente1.agregarCompra(3500000);

console.log(cliente1.descripcion());
console.log(cliente1.descuento());