function soma(numero1, numero2) {
    console.log(`A soma de ${numero1} + ${numero2} = ${numero1 + numero2}`);
}
// soma(+prompt("Insira o primeiro número"),+prompt("Insira outro número"))

function subtracao(numero1, numero2) {
    console.log(`A subtração de ${numero1} - ${numero2} = ${numero1 - numero2}`);    
}
// subtracao(+prompt("Insira o primeiro número"), +prompt("Insira outro número"))

function multiplicacao(numero1, numero2) {
    console.log(`A multiplicação de ${numero1} X ${numero2} = ${numero1 * numero2}`);
}
// multiplicacao(+prompt("Insira o primeiro número"), +prompt("Insira outro número"));

function divisao(numero1, numero2) {
    console.log(`A Divisão de ${numero1} / ${numero2} = ${numero1 / numero2}`);
}
// divisao(+prompt("Insira o primeiro número"), +prompt("Insira outro número"));

const nu1 = (+prompt("Insira o primeiro número"))
const nu2 = (+prompt("Insira outro número"))

soma(nu1,nu2)
subtracao(nu1,nu2)
multiplicacao(nu1,nu2)
divisao(nu1,nu2)
