/*CLASS (sugar sintax)

*/
class test {
  constructor(name, apellido = "Irarrazaval") {
    this._name = name;
    this._apellido = apellido;
  }
  getnombre() {
    return this._name + " " + this._apellido;
  }
}

var Walter = new test("Walter");
console.log(Walter.nombre);

function test2(name, apellido) {
  this._name = name;
  this._apellido = apellido;
}
test2.prototype.nombre = function () {
  return this._name + " " + this._apellido;
};

var walter = new test2("Walter", "Williams");
console.log(walter.nombre());

class SoyHenry extends test {
  constructor(name, apellido, cohorte) {
    super(
      name,
      apellido
    ); /* El super es igual a decir que hereda las propiedades de test. No hace falta que herede todas las propiedades. */
    this.cohorte = cohorte;
  }
  getCohorte() {
    return this._name + " " + this._apellido + this.cohorte;
  }
}

var fede = new SoyHenry("federico", "irarrazaval", 29);
var fede2 = new SoyHenry("federico", undefined, 29);

console.log(fede); // SoyHenry { _name: 'federico', _apellido: 'irarrazaval', cohorte: 29 }
console.log(fede2); // me imprime lo mismo pq toma el valor por defecto irarrazaval del apellido.

console.log(Walter.getnombre()); // puedo invocar la función  Walter Irarrazaval
console.log(fede2.getnombre()); // puedo invocar la función porque heredó esta función de su padre Persona: federico Irarrazaval
