//Faça um algoritmo que leia três notas obtidas por um aluno, e imprima na tela a média das notas.

function treino6(nota1, nota2, nota3){

    let media = (nota1 + nota2 + nota3) / 3

    return media.toFixed(2)
}

console.log(treino6(65, 78, 90))
console.log(treino6(60, 58, 80))
console.log(treino6(60, 88, 95))