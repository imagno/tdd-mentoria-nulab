
const saque = (valor) => {
  valorSaque = [];

  const valorRecebido = (valor, valorNota) => {
    notas = Math.trunc(valor / valorNota);
    valor -= notas * valorNota;

    return { notas, valor };
  }

  ({ notas, valor } = valorRecebido(valor, 100));
  const notasCem = notas;
  
  ({ notas, valor } = valorRecebido(valor, 50));
  const notasCinquenta = notas;

  ({ notas, valor } = valorRecebido(valor, 20));
  const notasVinte = notas;

  ({ notas, valor } = valorRecebido(valor, 10));
  const notasDez = notas;

  const pilha = (numNotas, valorNota )=> {
    for(let i = 0; i < numNotas; i++) {
      valorSaque.push(valorNota);
    }
  }

  pilha(notasCem, 100);
  pilha(notasCinquenta, 50);
  pilha(notasVinte, 20);
  pilha(notasDez, 10);

  return valorSaque; 
};


module.exports = { saque }