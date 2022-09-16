//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

function imprima (nome){
    console.log("Olá,", nome);
}
imprima("Severino")

//b) Declare uma função que imprima a tabuada do 6. Chame esta função.

function tabuada(valor){
    for (let i = 1; i <= 10; i++){
        console.log(`${valor} X ${i} = ${i*valor}`);
    }
}
tabuada(6)

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

const imprima = (nome) =>{
   console.log("Olá, ", nome);
}
imprima("Aline")




