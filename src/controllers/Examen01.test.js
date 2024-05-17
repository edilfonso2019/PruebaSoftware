const {
  puedeIngresar,
  recibeVale,
  realizarCompras,
  experienciaCliente,
} = require("./Examen01");

test("Verificar que el cliente puede ingresar si tiene 18 años o menos", () => {
  expect(puedeIngresar(18)).toBe(true);
  expect(puedeIngresar(17)).toBe(true);
  expect(puedeIngresar(19)).toBe(false);
});

test("Verificar que el cliente recibe un vale de descuento si el presupuesto es 100 o menos", () => {
  expect(recibeVale(100)).toBe(true);
  expect(recibeVale(50)).toBe(true);
  expect(recibeVale(101)).toBe(false);
});

test("Simular compras con descuento", () => {
  let productos = ["Cerveza", "Vino", "Refresco"];
  let comprasRealizadas = realizarCompras([...productos]); // Usar una copia de la lista
  expect(comprasRealizadas.length).toBeLessThanOrEqual(3);
  // Verifica que todos los productos en comprasRealizadas provienen de la lista original
  expect(comprasRealizadas).toEqual(
    expect.arrayContaining(["Cerveza", "Vino", "Refresco"])
  );
});

test("Simular experiencia del cliente en el bar", () => {
  let productos = ["Cerveza", "Vino", "Refresco"];
  let comprasRealizadas = experienciaCliente(18, 100, [...productos]); // Usar una copia de la lista
  expect(comprasRealizadas.length).toBeLessThanOrEqual(3);

  comprasRealizadas = experienciaCliente(19, 100, [...productos]); // Cliente mayor de 18
  expect(comprasRealizadas.length).toBe(0);
});
