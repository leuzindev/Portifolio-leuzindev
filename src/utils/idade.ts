

export function calculaIdade(dataNascimento: string) {
    const dataAtual = new Date();
    const dataNasc = new Date(dataNascimento);
    let diffAnos = dataAtual.getFullYear() - dataNasc.getFullYear();
    if (dataAtual.getMonth() < dataNasc.getMonth() || (dataAtual.getMonth() === dataNasc.getMonth() && dataAtual.getDate() < dataNasc.getDate())) {
      diffAnos--;
    }
    return diffAnos;
  }