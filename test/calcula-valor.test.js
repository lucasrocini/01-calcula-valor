const calculaValor = require('../src/calcula-valor')

describe('calcularMontante', () => {
  test('Com uma prestação, o montante é igual ao capital', () => {
    // Operação
    const montante = calculaValor.calcularMontante(100, 0.0175, 1)

    // Resultado Esperado
    expect(montante).toBe(100)
  })

  test('Com uma prestação, o montante é igual ao capital', () => {
    // Operação
    const montante = calculaValor.calcularMontante(500, 0.025, 4)

    // Resultado Esperado
    expect(montante).toBe(538.45)
  })
})

describe('arredondar', () => {
  test('Arredondar em 02 casas decimais', () => {
    const resultado = calculaValor.arredondar(538.4453124999998)
    expect(resultado).toBe(538.45)
  })

  test('1.005 deve retornar 1.01', () => {
    const resultado = calculaValor.arredondar(1.005)
    expect(resultado).toBe(1.01)
  })
})
