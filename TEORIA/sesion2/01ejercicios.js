//operaciones basicas carrito de compras
let carrito=[]
function mostrarCarrito(){
    if(carrito.length === 0){
        console.log("carrito vacio");
        return;
    }
    console.log(`carrito (${carrito.length} items):[${carrito.join(",")}]`);
}
mostrarCarrito();
//agregar productos
carrito.push("portatil Asus");
carrito.push("mouse");
carrito.push("memoria usb");
carrito.push("adaptador hdmi");
carrito.push("SSID");
mostrarCarrito();
//agregar al inicio productos con unshit : Memoria RAM, Cable Poder
carrito.unshift("Memoria Ram");
carrito.unshift("Cable Poder");
console.log(carrito);
mostrarCarrito();
//eliminar el ultimo elemento en pop
carrito.pop();
mostrarCarrito();
//verificar la existencia con finder 