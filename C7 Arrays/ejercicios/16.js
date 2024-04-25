function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    resultado.push(array[i] * i);
  }
  return resultado;
}

module.exports = multiplicarElementosPorIndice;
