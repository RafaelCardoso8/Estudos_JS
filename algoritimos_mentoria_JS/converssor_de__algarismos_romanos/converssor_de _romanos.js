let entrada = "X" 
let valor_decimal = 0 
let valor_num 
let proximo_valor

const romanos ={ // objeto com os valores romanos 
 I : 1,
 V : 5,
 X : 10,
 E : 50,
 C : 100,
 D : 500,
 M : 1000,
}

if( entrada.length >= 1 && entrada.length < 15){
   for ( i = 0; i < entrada.length; i++){
    valor_num = romanos[entrada[i]]
    //console.log(valor_num)
    
   }  
    

}
else{
    console.log("digite um valor válido")
}