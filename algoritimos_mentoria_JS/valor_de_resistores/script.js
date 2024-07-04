let result = ""

function calcularresistência(){
    let primeiracor =  "azul"//document.getElementById('cor1')
    let segundacor = "vermelho"//document.getElementById('cor2')
    let terceiracor = "vermelho"//document.getElementById('cor3')

    let valor1 = 0
    let valor2 = 0
    let valor3 = 0

    if(primeiracor === "preto"){
        valor1 = 0
    }
    else if(primeiracor === "marrom"){
        valor1 = 1
    }
    else if(primeiracor === "vermelho"){
        valor1 = 2
    }
    else if(primeiracor === "laranja"){
        valor1 = 3
    }
    else if(primeiracor === "amarelo"){
        valor1 = 4
    }
    else if(primeiracor === "verde"){
        valor1 = 5
    }
    else if(primeiracor === "azul"){
        valor1 = 6
    }
    else if(primeiracor === "violeta"){
        valor1 = 7
    }
    else if(primeiracor === "cinza"){
        valor1 = 8
    }
    else if(primeiracor === "branco"){
        valor1 = 9
    }

    //segundacor

    if(segundacor === "preto"){
        valor2 = 0
    }
    else if(segundacor === "marrom"){
        valor2 = 1
    }
    else if(segundacor === "vermelho"){
        valor2 = 2
    }
    else if(segundacor === "laranja"){
        valor2 = 3
    }
    else if(segundacor === "amarelo"){
        valor2 = 4
    }
    else if(segundacor === "verde"){
        valor2 = 5
    }
    else if(segundacor === "azul"){
        valor2 = 6
    }
    else if(segundacor === "violeta"){
        valor2 = 7
    }
    else if(segundacor === "cinza"){
        valor2 = 8
    }
    else if(segundacor === "branco"){
        valor2 = 9
    }

    //terceiracor

    if(terceiracor === "preto"){
        valor3 = 0
    }
    else if(terceiracor === "marrom"){
        valor3 = 1
    }
    else if(terceiracor === "vermelho"){
        valor3 = 2
    }
    else if(terceiracor === "laranja"){
        valor3 = 3
    }
    else if(terceiracor === "amarelo"){
        valor3 = 4
    }
    else if(terceiracor === "verde"){
        valor3 = 5
    }
    else if(terceiracor === "azul"){
        valor3 = 6
    }
    else if(terceiracor === "violeta"){
        valor3 = 7
    }
    else if(terceiracor === "cinza"){
        valor3 = 8
    }
    else if(terceiracor === "branco"){
        valor3 = 9
    }



   result = valor1 , valor2  * (valor3 * 1000)
}

calcularresistência()

console.log(result)
