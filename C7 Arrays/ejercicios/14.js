function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  return array.reduce(function(contador, elemento) {
    if (elemento > 10) {
      contador++;
    }
    return contador;
  }, 0);
}

module.exports = contarElementosMayoresA10;
