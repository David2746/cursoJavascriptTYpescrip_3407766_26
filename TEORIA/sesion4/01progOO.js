//clase  en POO: es una plantilla o molde para crear objetos
//el constructor seria el metodo principal y permite crear los objetos

class producto {
    //el constructor recibe los datos iniciales de cada objeto
    constructor(id, nombre, precio, stock=5) {
        //this asigna los valores a cada propiedad 
        this.id   =    id;
        this.nombre =   nombre;
        this.precio =  precio;
        this.stock = stock;
        this.fecha = new Date();
    }//end constructor
    //cerar los metodos utilixados para cualquier objeto
    descripcion(){ 
        return`[producto id: ${this.id} nombre del producto: ${this.nombre}]`
    }
    //metodo para mostrar el producto con stock mayor a 5
    productodisponible(){
        return this.stock > 5
        ?`se cuenta con un stock alto ${this.stock}`
        :`debe hacer un nuevo pedido ${this.stock}`
    }

    //hacer un descuento de acuerdo al valor indicado desde el llamado metodo
    descuentoProducto(numero){
        let porcentaje = numero
        return porcentaje > 5
        ? `aplica`
        : `no aplica`
    }
}//fin clase
let prod1 = new producto(1001, "laptop dell xps", 5500000, 3);
let prod2 = new producto(1002, "mouse logitech", 80000, 4);
let prod3 = new producto(1003, "teclado mecanico", 100000, 10);
console.log(prod1);
console.log(prod1.descripcion());
console.log(prod1.productodisponible());
console.log(prod1.aplicardescuento(4)); //resultado valor actual del producto