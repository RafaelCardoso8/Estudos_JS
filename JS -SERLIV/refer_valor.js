let x = 8
let nome = "Rafael"
let sobrenome = "Cardoso"

const y = { y: [88]}

function mudaX(x){
    console.log(x)
    x++
    return console.log("x dentro da função " + x)
    
}

function muda_y(obj){
    obj.y++
}

function nome_completo(nome, sobrenome){
    return console.log("O nome completo é " + nome + " " + sobrenome)
}

mudaX(x)
console.log("x inicial " + x)
nome_completo(nome, sobrenome)
muda_y(y)    
console.log(y)

