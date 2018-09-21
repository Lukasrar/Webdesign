function Calculadora1(operando1Final, operando2Final) {
  this.operando1 = operando1Final;
  this.operando2 = operando2Final;
  this.somar = function() {
    return this.operando1 + this.operando2;
  }
  this.subtrair = function() {
    return this.operando1 - this.operando2;
  }
  this.multiplicar = function() {
    return this.operando1 * this.operando2;
  }
  this.dividir = function() {
    return this.operando1 / this.operando2;
  }
  this.raiz = function() {
    return Math.sqrt(this.operando1); 
  }
  this.mod = function() {
    return this.operando1 % this.operando2; 
  }
  this.div = function() {
    return this.operando1 / this.operando2; 
  }
}