//Actividad 1
//Actividad 1.1
const titulo = document.getElementById("titulo");
const mensaje  = document.getElementById("mensaje");
const producto = document.getElementById("producto");
const precio = document.getElementById("precio");
const stock = document.getElementById("stock");
//Actividad 1.2
console.log(titulo.textContent);
console.log(mensaje.textContent);
console.log(producto.textContent);
//Etapa 2
//Actividad 2.1
titulo.textContent= "StoreApp - Gestion de Inventario"
console.log(titulo.textContent);
//Actividad 2.2
mensaje.textContent= "Producto registrado correctamente"
console.log(mensaje.textContent);
//Actividad 2.3
producto.textContent= "Laptop Lenovo Thinkpad"
console.log(producto.textContent);
//Actividad 2.4
const dataID= producto.getAttribute("data-id");
console.log(dataID);
const dataPrecio= producto.getAttribute("data-precio");
console.log(dataPrecio);
//Actividad 2.5
producto.setAttribute("data-stock", "5");
console.log("stock:" + producto.dataset.stock)
//Actividad 2.6
//Crear title
producto.setAttribute("title", "Producto tecnologico")
console.log(producto.getAttribute("title"));
//borrar title
producto.removeAttribute("title");
console.log(producto.getAttribute("title"));
//Etapa 3
//Actividad 3.1
producto.style.padding = "30px";
/*Actividad 3.2
const btnDestacar= document.getElementById("btnDestacar");
btnDestacar.addEventListener("click", () => {
    producto.classList.add("destacada");
})*/
//Actividad 3.3
const btnDestacar= document.getElementById("btnDestacar");
btnDestacar.addEventListener("click", () => {
    producto.classList.toggle("destacada");
})
//Actividad 3.4
const btnDesactivar= document.getElementById("btnDesactivar");
btnDesactivar.addEventListener("click", () => {
    producto.classList.toggle("inactiva");
})
//Actividad 3.5
btnDestacar.addEventListener("click", () => {
    const esDestacada= producto.classList.contains("destacada");
    console.log("¿Producto destacado?:", esDestacada);
})