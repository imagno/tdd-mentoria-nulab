const { saque } = require('../controller/caixaEletronico.js');

describe('Retornar o menos número de cédulas', () => {
  test('Sacando R$ 30,00 deve retornar uma cédula de R$ 20,00 e uma de R$ 10,00', () => {
    expect(saque(30)).toEqual([20, 10]);
  });

  test('Sacando R$ 80,00 deve retornar uma cédula de R$ 50,00, R$ 20,00 e uma de R$ 10,00', () => {
    expect(saque(80)).toEqual([50, 20, 10]);
  });

  test('Sacando R$ 20,00 deve retornar uma cédula de R$ 20,00', () => {
    expect(saque(20)).toEqual([20]);
  });

  test('Sacando R$ 180,00 deve retornar uma cédula de R$ 100,00, R$ 50,00, R$ 20,00 e uma de R$ 10,00', () => {
    expect(saque(180)).toEqual([100, 50, 20, 10]);
  });

  test('Sacando R$ 280,00 deve retornar duas cédulas de R$ 100,00, uma de R$ 50,00, R$ 20,00 e R$ 10,00', () => {
    expect(saque(280)).toEqual([100, 100, 50, 20, 10]);
  });
});