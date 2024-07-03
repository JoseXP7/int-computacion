export default class Cl_Caja {
  constructor(billuno, billcinco, billdiez, billveinte, billcincu, billcien) {
    this.billuno = billuno
    this.billcinco = billcinco
    this.billdiez = billdiez
    this.billveinte = billveinte
    this.billcincu = billcincu
    this.billcien = billcien
  }
  set billuno(billuno) {
    this._billuno = +billuno
  }
  get billuno() {
    return this._billuno
  }

  set billcinco(billcinco) {
    this._billcinco = +billcinco
  }
  get billcinco() {
    return this._billcinco
  }
  set billdiez(billdiez) {
    this._billdiez = +billdiez
  }
  get billdiez() {
    return this._billdiez
  }
  set billveinte(billveinte) {
    this._billveinte = +billveinte
  }
  get billveinte() {
    return this._billveinte
  }
  set billcincu(billcincu) {
    this._billcincu = +billcincu
  }
  get billcincu() {
    return this._billcincu
  }
  set billcien(billcien) {
    this._billcien = +billcien
  }
  get billcien() {
    return this._billcien
  }
  montoTotal() {
    return (
      this.billuno * 1 +
      this.billcinco * 5 +
      this.billdiez * 10 +
      this.billveinte * 20 +
      this.billcincu * 50 +
      this.billcien * 100
    )
  }
}
