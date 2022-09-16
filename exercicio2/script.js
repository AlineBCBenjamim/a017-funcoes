
function soma(numero1, numero2) {
  console.log(`A soma ${numero1} + ${numero2} = ${numero1 + numero2}`);
}
soma(2, 5);


function maiorOuIgual(numero1, numero2) {
  let maiorOuIgual2 = true;
  if (numero1 >= numero2) {
    console.log(`O número ${numero1} é maior ou igual a ${numero2}`);
  } else {
    maiorOuIgual2 = false;
    console.log(`O número ${numero1} não é maior ou igual a ${numero2}`);
  }
}
maiorOuIgual(4,3)
maiorOuIgual(3,4)


function parOuImpar (numero1) {
    if (numero1% 2 === 0) {
        console.log(`O número ${numero1} é par`);
    }else{
        console.log(`O número ${numero1} é ímpar`);
    }
}
parOuImpar(3)


function tamanhoDaMensagem(mensagem) {
    console.log(`O tamanho da mensagem é ${mensagem.length}, ${mensagem.toUpperCase()}`);    
}
tamanhoDaMensagem("Olá mundo!")






