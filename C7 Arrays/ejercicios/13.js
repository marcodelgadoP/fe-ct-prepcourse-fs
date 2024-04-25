function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  return array.filter(function(elemento) {
    return elemento % 2 === 0;
  });
}

module.exports = filtrarNumerosPares;
