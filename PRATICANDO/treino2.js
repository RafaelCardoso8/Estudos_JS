// Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

function testar(n){
    let res = n % 2
    let teste1, teste2

    if ( n > 0 ){
        teste1 = true
    }
    else{
        teste1 = false
    }

    if ( res == 0 ){
        teste2 = true
    }
    else{
        teste2 = false
    }

    if( teste1 == true && teste2 == true){
        return " Par e posito"
    }

    if( teste1 == false && teste2 == true){
        return " Negativo e posito"
    }

    if( teste1 == true && teste2 == false){
        return " Par e negativo"
    }else{
        return " Impar e negativo"
    }    

}

console.log(testar( 20))
console.log(testar( 21))
console.log(testar( -20))
console.log(testar( -21))