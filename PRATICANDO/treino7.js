//Faça um algoritmo que leia quatro notas obtidas por um aluno, calcule a média das nota obtidas, imprima na tela o nome do aluno e  se o aluno foi aprovado ou reprovado. Para o aluno ser considerado aprovado sua média final deve ser maior ou igual a 7.

function treino7(nota1,nota2,nota3,nota4,aluno){
    let nome = aluno
    let media =(nota1 + nota2 + nota3 + nota4)/ 4
    if ( media >= 7){
        return nome +" - APROVADO"
    }
    else{
        return nome +" - REPROVADO"
    }       
}

console.log(treino7( 4,7,9,5,"Rafael Oliveira"))
console.log(treino7( 10,8,9,8,"Rita Silva"))
console.log(treino7( 6,5,9,9,"Olivia Torres"))
console.log(treino7( 7,7,9,8,"Vitor Hugo"))