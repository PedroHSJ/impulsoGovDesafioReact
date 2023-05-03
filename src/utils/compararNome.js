const compararNome = (a, b) => {
    const nomeA = a.nome.toUpperCase(); // Convertendo para letras maiúsculas
    const nomeB = b.nome.toUpperCase();
  
    if (nomeA < nomeB) {
      return -1;
    }
    if (nomeA > nomeB) {
      return 1;
    }
    return 0;
}

export default compararNome;