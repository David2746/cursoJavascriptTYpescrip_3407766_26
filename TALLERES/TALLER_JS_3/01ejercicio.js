let empleado={
    nombre:"David",
    edad: 20,
    cargo: "Desarrollador",
    salario: 10000000,
    activo: true,
    contacto:{
        telefono: "3204029102",
        correo: "davidvaldez27466@gmail.com"
    },
    habilidades:["JavaScript","HTML","CCS"],

    fichaCompleta() {
    return `
        nombre: ${this.nombre},
        edad: ${this.edad},
        cargo: ${this.cargo},
        salario: ${this.salario},
        activo: ${this.activo},
        telefono: ${this.contacto.telefono},
        correo: ${this.contacto.correo} ,
        habilidades: ${this.habilidades.join(", ")}`
    }
};
for (const [clave, valor] of Object.entries(empleado)) {
    console.log(clave, ":", valor);
}