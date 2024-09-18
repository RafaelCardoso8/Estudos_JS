let m = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
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
console.log(m[1][1], m[2][1])