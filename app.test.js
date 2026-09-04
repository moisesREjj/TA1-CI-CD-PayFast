const test = require('node:test');
const assert = require('node:assert');
const { validarMontoPago } = require('./app');

test('Validación de pagos PayFast', async (t) => {
  await t.test('Debe aprobar un monto válido mayor a cero', () => {
    const resultado = validarMontoPago(150.50);
    assert.strictEqual(resultado.valido, true);
    assert.strictEqual(resultado.mensaje, "Pago procesado correctamente");
  });

  await t.test('Debe rechazar un monto menor o igual a cero', () => {
    const resultado = validarMontoPago(-20);
    assert.strictEqual(resultado.valido, false);
  });
});
