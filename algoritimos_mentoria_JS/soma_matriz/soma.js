let m = [
    [1,2,3,10],
    [4,5,6,11],
    [7,8,9,12],
    [13,14,15],
    [3,2,1,4]
]

function soma_matriz(m){
    let soma = 0
  
    for(i = 0; i < m.length; i++){
        for(j = 0; j < m[i].length; j++){
             soma = soma + m[i][j]
        }
    }
    return soma
}

console.log(soma_matriz(m))
console.log(m)
console.log( m.length)
console.log(m[1].length)
console.log(m[1][3], m[3][2])