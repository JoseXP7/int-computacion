import Cl_Caja from './js/Cl_Caja.js'
import Cl_ICaja from './js/Cl_ICaja.js'

let iCaja = new Cl_ICaja(),
  b1 = iCaja.leerBillUno(),
  b5 = iCaja.leerBillCinco(),
  b10 = iCaja.leerBillDiez(),
  b20 = iCaja.leerBillVeinte(),
  b50 = iCaja.leerBillCincu(),
  b100 = iCaja.leerBillCien(),
  caja = new Cl_Caja(b1, b5, b10, b20, b50, b100),
  salida = document.getElementById('salida')

salida.innerHTML = iCaja.reporteCaja(
  caja.billuno,
  caja.billcinco,
  caja.billdiez,
  caja.billveinte,
  caja.billcincu,
  caja.billcien,
  caja.montoTotal()
)
