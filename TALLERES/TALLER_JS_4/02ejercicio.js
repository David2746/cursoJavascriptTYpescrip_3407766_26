class Usuario {
    constructor(id, nombre, email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }

    descripcion() {
        return `${this.id} - ${this.nombre}`;
    }
}

class Empleado extends Usuario {
    constructor(id, nombre, email, cargo) {
        super(id, nombre, email);

        this.cargo = cargo;
    }

    descripcion() {
        return `${super.descripcion()} | Cargo: ${this.cargo}`;
    }
}

class Administrador extends Empleado {
    constructor(id, nombre, email, cargo, permiso) {
        super(id, nombre, email, cargo);

        this.permiso = permiso;
    }

    descripcion() {
        return `${super.descripcion()} | Permiso: ${this.permiso}`;
    }
}

let admin = new Administrador(
    1,
    "David",
    "david@gmail.com",
    "Administrador",
    "Acceso total"
);

console.log(admin.descripcion());