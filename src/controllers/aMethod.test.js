// Importar la función a probar
const { experienciaCliente } = require("./Examen01");

// Describe el conjunto de pruebas para la función experienciaCliente
describe("Pruebas para la función experienciaCliente", () => {
  // Test 1: Descripción del primer caso de prueba
  test("Cliente menor de 18 años con presupuesto suficiente y productos disponibles", () => {
    // Configuración de entrada
    const edad = 16;
    const presupuesto = 100;
    const productosDisponibles = ["Cerveza", "Vino", "Refresco"];

    // Llamar a la función a probar
    const resultado = experienciaCliente(
      edad,
      presupuesto,
      productosDisponibles
    );

    // Aserción o verificación del resultado
    expect(resultado).toEqual(expect.any(Array)); // Por ejemplo, verificando si el resultado es un arreglo
  });

  // Test 2: Descripción del segundo caso de prueba
  test("Cliente mayor de 18 años con presupuesto suficiente y productos disponibles", () => {
    // Configuración de entrada
    const edad = 20;
    const presupuesto = 100;
    const productosDisponibles = ["Cerveza", "Vino", "Refresco"];

    // Llamar a la función a probar
    const resultado = experienciaCliente(
      edad,
      presupuesto,
      productosDisponibles
    );

    // Aserción o verificación del resultado
    expect(resultado).toHaveLength(0); // Por ejemplo, verificando que el resultado sea una lista vacía
  });

  // Otros casos de prueba aquí...
});
