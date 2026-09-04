// Función para validar el monto de una transacción en PayFast
function validarMontoPago(monto) {
  if (typeof monto !== 'number' || isNaN(monto)) {
    return { valido: false, mensaje: "Monto inválido" };
  }
  if (monto <= 0) {
    return { valido: false, mensaje: "El monto debe ser mayor a cero" };
  }
  return { valido: true, mensaje: "Pago procesado correctamente" };
}

module.exports = { validarMontoPago };
