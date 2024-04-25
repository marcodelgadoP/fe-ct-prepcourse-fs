function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const contador = {};
  for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i];
    if (contador[num]) {
      return num;
    } else {
      contador[num] = true;
    }
  }
  return undefined;
}

module.exports = encontrarElementoRepetido;