/* Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor na tela.*/

function treino3(A,B){
    let C 
    
    if( A == B){
        C = A + B
    }
    else{
        C = A * B
    }
    return C
}

console.log( treino3( 10, 10))
console.log( treino3( 10, 20))