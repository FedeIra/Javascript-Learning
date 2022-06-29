function filtrar(funcion) {
  Array.prototype.filtrar = (funcion, productos) =>
    productos.map((productos) => productos.funcion());
}
// No modifiques nada debajo de esta linea //

module.exports = filtrar;
