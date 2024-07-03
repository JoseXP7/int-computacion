export default class Cl_ICaja {
  leerBillUno() {
    return prompt('Ingresa la cantidad de billetes de $1')
  }

  leerBillCinco() {
    return prompt('Ingresa la cantidad de billetes de $5')
  }

  leerBillDiez() {
    return prompt('Ingresa la cantidad de billetes de $10')
  }

  leerBillVeinte() {
    return prompt('Ingresa la cantidad de billetes de $20')
  }

  leerBillCincu() {
    return prompt('Ingresa la cantidad de billetes de $50')
  }

  leerBillCien() {
    return prompt('Ingresa la cantidad de billetes de $100')
  }

  reporteCaja(b1, b5, b10, b20, b50, b100, total) {
    return `
            <p>RESUMEN CIERRE DE CAJA</p>
            <p>Billetes de $1: ${b1} Total: ${b1 * 1}</p>
            <p>Billetes de $5: ${b5} Total: ${b5 * 5}</p>
            <p>Billetes de $10: ${b10} Total: ${b10 * 10}</p>
            <p>Billetes de $20: ${b20} Total: ${b20 * 20}</p>
            <p>Billetes de $50: ${b50} Total: ${b50 * 50}</p>
            <p>Billetes de $100: ${b100} Total: ${b100 * 100}</p>
            <p>Monto Total: ${total}</p>
        `
  }
}
