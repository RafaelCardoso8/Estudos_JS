function verificar_palavra(entrada){
     let verificar_esp 
     let tamanho_palavra
    
    // testar o tamanho da palavra
    if( entrada.length < 21){

      if(entrada.length > 2){
       tamanho_palavra = true

      }
      else{
        tamanho_palavra = false
      }
    }
    else{
        tamanho_palavra = false
    }

    // testar caracteres especiais
    for( i = 0; i < entrada.length; i++){
        if (entrada[i].match(/[a-zA-Z0-9\s]/) && entrada[i] !== " "){// testa se tem vogais, consoantes e números usando expressões regulares
            verificar_esp = true
        }
        else{
            verificar_esp = false
            break
        }
    }

    //teste final- verificar o tamnho da palavra e se tem caractere especial
    if( verificar_esp == true && tamanho_palavra == true){
        return "VERDADEIRO-OK!!!"
    }
    else{
        return "FALSO-ESSA NÃO!!!"
    }    
}
console.log(verificar_palavra("234AdaWW"))
console.log(verificar_palavra("b3"))
console.log(verificar_palavra("fdbfbdbfdzfbfbfbfdbgdgbberrwewFYLÇFGHDTDSARW"))
console.log(verificar_palavra("a3$e"))
