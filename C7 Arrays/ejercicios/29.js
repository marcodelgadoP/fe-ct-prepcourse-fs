function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }
  const min = Math.min(...numeros);
  const max = Math.max(...numeros);
  for (let i = min; i <= max; i++) {
    if (!numeros.includes(i)) {
      return i;
    }
  }
  return null;
}

module.exports = encontrarNumeroFaltante;