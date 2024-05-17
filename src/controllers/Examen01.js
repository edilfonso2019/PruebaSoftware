// Función para verificar si un cliente puede ingresar al bar
function puedeIngresar(edad) {
  return edad <= 18;
}

// Función para verificar si el cliente recibe un vale de descuento
function recibeVale(presupuesto) {
  return presupuesto <= 100;
}

// Función para simular la compra de productos con descuento
function realizarCompras(productosDisponibles, comprasMaximas = 3) {
    let compras = 0;  // Contador para llevar la cuenta de las compras realizadas
    let comprasRealizadas = [];  // Array para almacenar los productos comprados
    
    // Bucle externo: controla cuántas compras se han hecho y si hay productos disponibles
    while (compras < comprasMaximas && productosDisponibles.length > 0) {
        let productoEncontrado = false;  // Bandera para indicar si se encontró un producto
        
        // Bucle interno: intenta encontrar y agregar un producto disponible
        while (!productoEncontrado && productosDisponibles.length > 0) {
            let producto = productosDisponibles.pop();  // Obtener un producto del array (eliminar el último elemento)
            if (producto) {
                comprasRealizadas.push(producto);  // Agregar el producto encontrado a la lista de compras realizadas
                productoEncontrado = true;  // Cambiar la bandera para indicar que se encontró un producto
            }
        }
        
        compras++;  // Incrementar el contador de compras realizadas
    }
    
    return comprasRealizadas;  // Devolver la lista de productos comprados
}

// Función principal que simula la experiencia del cliente en el bar
function experienciaCliente(edad, presupuesto, productosDisponibles) {
  if (puedeIngresar(edad)) {
    console.log("El cliente puede ingresar al bar.");

    if (recibeVale(presupuesto)) {
      console.log("El cliente recibe un vale de descuento.");
    }

    let comprasRealizadas = realizarCompras(productosDisponibles);
    console.log("El cliente ha completado sus compras:", comprasRealizadas);
    return comprasRealizadas;
  } else {
    console.log(
      "El cliente no puede ingresar al bar por ser mayor de 18 años."
    );
    return [];
  }
}

module.exports = {
  puedeIngresar,
  recibeVale,
  realizarCompras,
  experienciaCliente,
};
