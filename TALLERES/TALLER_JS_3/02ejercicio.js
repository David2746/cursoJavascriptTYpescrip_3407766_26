const proveedores = {
  "PRV-001": {
    nombre: "Tech Distribuidora S.A.S.",
    ciudad: "Bogotá",
    telefono: "6012345678",
    activo: true,
    productos: ["Laptop Dell", "Monitor LG", "Mouse Logitech"]
  },

  "PRV-002": {
    nombre: "ImportaCo LTDA",
    ciudad: "Cali",
    telefono: "6023456789",
    activo: true,
    productos: ["Teclado Redragon", "Mouse Logitech", "Webcam C920"]
  },

  "PRV-003": {
    nombre: "Digital Supplies",
    ciudad: "Medellín",
    telefono: "6045678901",
    activo: false,
    productos: ["Auriculares Sony", "Bocinas Logitech"]
  }
};

function agregarProveedor(id, datos) {
  proveedores[id] = datos;
}

function actualizarProveedor(id, datos) {
  if (proveedores[id]) {
    Object.assign(proveedores[id], datos);
  } else {
    console.log("Proveedor no encontrado.");
  }
}

function buscarPorProducto(producto) {
  for (const id in proveedores) {
    if (proveedores[id].productos.includes(producto)) {
      console.log(id, proveedores[id].nombre);
    }
  }
}

function mostrarActivos() {
  for (const id in proveedores) {
    if (proveedores[id].activo) {
      console.log(id, proveedores[id].nombre);
    }
  }
}