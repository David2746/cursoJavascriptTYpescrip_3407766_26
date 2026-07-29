//2. Subtema herencia con extend y super
//La herencia permite crear clases basadas en clases existentes 
//La clase hija hereda metodos y propiedades del padre
class producto{
    constructor(id, nombre, precio, stock=0) {
        this. id= id;
        this. nombre= nombre;
        this. precio= precio;
        this. stock= stock;

    }// fin de el constructor
    //metodo descripcion
    descripcion() {
        return `${this.id} ${this.nombre}`
    }
    disponible() {
        return this.stock >5
    }
}//fin de la clase

//heredar de la clase padre producto a una nueva clase llamada ProductoDigital

class ProductoDigital extends producto {
    constructor(id, nombre, precio, urldescargas, licencias=2) {
        //super() llama al constructor del padre es obligatorio antes de usar this
        super(id, nombre, precio,999)
        this.urldescargas=urldescargas;
        this.licencias=licencias;
    }//termina constructor

    //SOBREESCRIBE (overide) el metodo padre descripcion
    descripcion() {
        //super.descripcion() llamar a el metodo padre
        return `${super.descripcion()}| Digital | ${this.licencias} licencias(s)`;
    }

    generarEnlace(){
        let token=Math.random().toString(36)
        return `${this.urldescargas}?token=${token}`;
    }
}//fin de la clase productoDigital

class ProductoFisico extends producto{
    constructor(id, nombre, precio, stock, pesoKg){
        super(id, nombre, precio, stock);
        this.pesoKg= pesoKg;
    }
//metodo
calcularEnvio(distanciaKm){
    let base=8000;
    let porKm=50;
    let recargo=this.pesoKg>5?this.pesoKg*500:0
    return base+distanciaKm*porKm+recargo;
    }
//2 metodo
descripcion(){
    return `${super.descripcion()} | ${this.pesoKg}`;
}
}

let software = new ProductoDigital(100, "suit de office 365", 350000, "http://office.com")
console.log(software.descripcion());
console.log(software.generarEnlace());
let laptop= new ProductoFisico("Pr001", "Laptop Maquintonch", 7500000, 10, 4.5);
console.log(`Envio Laptop 50Km: $${laptop.calcularEnvio(50)}`);
console.log(laptop.descripcion());
