let producto={
    id:101,
    nombre: 'laptop Dell CPS 12"',
    precio:56000000,
    stock: 10,
    disponible: true,
    //una propiedad puede ser otro objeto
    dimensiones: {largo:34, ancho:25, alto:15},
    //array
    etiquetas: ["ultraboock","gamer","programacio"]
};
//acceder a una propiedad
console.log(producto.nombre);
console.log(producto.etiqueta);
console.log(producto.dimensiones);
//notacion o trabajo con corchetes
let clave="precio";
console.log(producto[clave]);
//modificacion propiedades
producto.precio= 5500000;//modico un valor existente
producto.disponible=false;//modifico
producto.color="plateado";//agrego una propiedad
delete producto.disponible;//eliminar propiedad
//verificar si una propiedad existe
console.log("precio" in producto);//true
console.log("disponible" in producto);//false
