

function calcularresistência(){
    let primeiracor =  document.getElementById('cor1').value
    let segundacor = document.getElementById('cor2').value
    let terceiracor = document.getElementById('cor3').value
    let result = document.getElementById('valor_do_resistor')

    let valor1 
    let valor2 
    let valor3

    if(primeiracor === "preto"){
        valor1 = "0"
    }
    else if(primeiracor === "marrom"){
        valor1 = "1"
    }
    else if(primeiracor === "vermelho"){
        valor1 = "2"
    }
    else if(primeiracor === "laranja"){
        valor1 = "3"
    }
    else if(primeiracor === "amarelo"){
        valor1 = "4"
    }
    else if(primeiracor === "verde"){
        valor1 = "5"
    }
    else if(primeiracor === "azul"){
        valor1 = "6"
    }
    else if(primeiracor === "violeta"){
        valor1 = "7"
    }
    else if(primeiracor === "cinza"){
        valor1 = "8"
    }
    else if(primeiracor === "branco"){
        valor1 = "9"
    }

    //segundacor

    if(segundacor === "preto"){
        valor2 = "0"
    }
    else if(segundacor === "marrom"){
        valor2 = "1"
    }
    else if(segundacor === "vermelho"){
        valor2 = "2"
    }
    else if(segundacor === "laranja"){
        valor2 = "3"
    }
    else if(segundacor === "amarelo"){
        valor2 = "4"
    }
    else if(segundacor === "verde"){
        valor2 = "5"
    }
    else if(segundacor === "azul"){
        valor2 = "6"
    }
    else if(segundacor === "violeta"){
        valor2 = "7"
    }
    else if(segundacor === "cinza"){
        valor2 = "8"
    }
    else if(segundacor === "branco"){
        valor2 = "9"
    }

    //terceiracor

    if(terceiracor === "preto"){
        valor3 = 1
    }
    else if(terceiracor === "marrom"){
        valor3 = 10
    }
    else if(terceiracor === "vermelho"){
        valor3 = 100
    }
    else if(terceiracor === "laranja"){
        valor3 = 1000
    }
    else if(terceiracor === "amarelo"){
        valor3 = 100000
    }
    else if(terceiracor === "verde"){
        valor3 = 1000000
    }
    else if(terceiracor === "azul"){
        valor3 = 10000000
    }
    else if(terceiracor === "violeta"){
        valor3 = 100000000
    }
    else if(terceiracor === "dourado"){
        valor3 = 0.1
    }
    else if(terceiracor === "prata"){
        valor3 = 0.01
    }
    
    let valor_final =(parseInt(valor1.toString() + valor2.toString())) * valor3;

    console.log(valor_final)

   result.innerHTML = `O valor do resistor é ${valor_final} ohms` 
}


