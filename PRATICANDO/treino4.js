//Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.

function treino4(n){
    let ant = n-1
    let suc = n+1    

    return ant,suc
}

console.log(treino4(9))
console.log(treino4(15))
console.log(treino4(8))