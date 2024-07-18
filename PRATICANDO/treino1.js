//Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se a soma é menor que C.



function   soma(a,b,c){
let soma1

soma1 = a + b
  if( soma1 > c){
    return "A soma de a + b é maior que o valor de c. O valor de c é "+ c +" e o valor da soma de a + b é " + soma1    
  }
  else if( soma1 < c){
    return "A soma de a + b é menor que o valor de c. O valor de c é "+ c +" e o valor da soma de a + b é " + soma1 
  }
   else{
    return "A soma de a + b é igual  ao valor de c. O valor de c é "+ c +" e o valor da soma de a + b é " + soma1 
  }
}

console.log(soma(2,4,8))
console.log(soma(9,3,12))
console.log(soma(2,2,4))