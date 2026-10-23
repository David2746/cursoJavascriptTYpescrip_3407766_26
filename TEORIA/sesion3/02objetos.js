//subtema 2. Metodos en objetos
const carrito = {
    items: [],//propiedad
    total: 0,
    //metodos
    agregarProducto(producto, cantidad){
        //this para hacer referencia al producto objeto de carrito
        this.items.push({producto, cantidad});
        this.total +=producto.precio*cantidad;
    },
    //metodo para mostrar productos
    verProductos(){
        console.log(`Items: ${this.items.length}|total: $${this.total.toLocaleString("es-co")}`);
    }
};//fin objeto
carrito.agregarProducto({nombre: "mouse", precio: 30000},5);
carrito.agregarProducto({nombre: "teclado", precio: 45000},10);
carrito.verProductos();
//forma correcta de usar una funcion
let objeto={ //construyo el metodo 
    nombre:"StoreApp",
    mostrar(){console.log(this.nombre);}
}
objeto.mostrar(); //lamo el metodo