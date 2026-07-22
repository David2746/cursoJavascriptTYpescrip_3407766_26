//subtema 3. Object.keys, Object.enriers
let producto={
    nombre: "web cam FHD",
    precio: 2800000,
    stock: 40,
    categoria: "perifericos"
};
//Object.keys
let claves= Object.keys(producto);;//hace un arreglo con las claves de el objeto
console.log(claves);
let valores= Object.values(producto);//ace un arreglo con los valores
console.log(valores);
let entradas= Object.entries(producto);//hace un arreglo de pares [clave, valor]
console.log(entradas); 
//interacion sobre un objeto
console.log("\nFicha Tecnica:");
for (let [clave,valor] of Object.entries(producto)) {
    console.log(`${clave.padEnd(12)}: ${valor}`);
}
