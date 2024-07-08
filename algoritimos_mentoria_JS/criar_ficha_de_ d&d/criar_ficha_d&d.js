
for ( x = 0; x < 6; x++){
function gerarNumeroAleatorio() {
    // Gera um número aleatório entre 1 e 6
    return Math.floor(Math.random() * 6) + 1
}

function gerarQuatroNumeros() {
    let numeros = []
    for (let i = 0; i < 4; i++) {
        numeros.push(gerarNumeroAleatorio())
    }
    return numeros
}

// Gerar e imprimir os quatro números aleatórios
let quatroNumeros = gerarQuatroNumeros()
let total = 0
//console.log(quatroNumeros)

let menor = quatroNumeros[0]
let cont_posicao = 0

for ( i = 0; i < 4 ; i++){
   if (menor > quatroNumeros[i]){
    menor = quatroNumeros[i]  
    cont_posicao = i
   }
}
//console.log(cont_posicao, menor)

//quatroNumeros.splice(cont_posicao,1)
//console.log(quatroNumeros)

for( j = 0 ; j < quatroNumeros.length; j++){
     total += quatroNumeros[j]

}

if( x == 0){
  console.log( "FORÇA = " + total)
}
else if(x == 1){
    console.log( "DESTREZA = " + total)
}
else if(x == 2){
    console.log( "CONSTITUIÇÃO = " + total)
}
else if(x == 3){
    console.log( "INTELIGÊNCIA = " + total)
}
else if(x == 4){
    console.log( "SABEDORIA = " + total)
}
else if(x == 5){
    console.log( "CARISMA = " + total)
}
}