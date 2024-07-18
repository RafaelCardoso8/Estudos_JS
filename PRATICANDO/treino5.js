//Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.293,20).

function treino5(sal_min, sal_usuario){

    let qtd_sal = sal_usuario / sal_min

    return qtd_sal

}

console.log(treino5(1293.20, 3660.50))
console.log(treino5(1293.20, 4260.70))
console.log(treino5(1293.20, 4450,34))