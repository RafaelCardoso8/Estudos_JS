function romanos_para_decimal(entrada){


 let valor_decimal  = 0
 let valor_num 
 let proximo_valor

 const romanos ={ // objeto com os valores romanos 
  I : 1,
  V : 5,
  X : 10,
  L : 50,
  C : 100,
  D : 500,
  M : 1000,
 }

  if( entrada.length >= 1 && entrada.length < 15){
   for ( i = 0; i < entrada.length; i++){
    valor_num = romanos[entrada[i]]
    //console.log(valor_num)
    proximo_valor = romanos[entrada[i + 1]]

    if(proximo_valor > valor_num){
        valor_decimal -= valor_num
    }
    else{
        valor_decimal += valor_num
    }    
   }    
  return valor_decimal
  }
  else{
    console.log("digite um valor válido")
  }

}

console.log(romanos_para_decimal("XVII"))
console.log(romanos_para_decimal("III"))
console.log(romanos_para_decimal("LVIII"))
console.log(romanos_para_decimal("MCMXCIV"))
console.log(romanos_para_decimal("MCMLXXXV"))
