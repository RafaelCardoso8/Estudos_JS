// TIPOS PRIMITIVOS
let dias = 20
let nome = "Rafael Cardoso"
let email = ""
let est_civil = true

let num = "8000.35"
let num1 = Number(num)
let num2 = parseInt(num)
let num3 = parseFloat(num)
let num4 = +num


let segunda_letra = nome.charAt(0)
let maiusculo = nome.toUpperCase()
let teste_number = dias.toString()
let novo_teste_number = teste_number.slice()

/*console.log(!!dias)
console.log( typeof dias)
console.log(teste_number)
console.log(typeof teste_number)
console.log(maiusculo)
console.log(segunda_letra)

console.log(num1, num2, num3, num4)
console.log(typeof num,typeof num1, typeof num2,typeof num3,typeof num4)*/

 

//TIPOS DE REFERÊNCIA

function Heroi(nome_heroi, classe_heroi, poder_heroi,magia,atuando){
    this.nome_h = nome_heroi
    this.classe_h = classe_heroi
    this.poder_h = poder_heroi
    this.magia_h = magia
    this.atuando = atuando


    this. calcular_poder_total = function(poder_h,magia_h){
        let poder_total = this.poder_h + this.magia_h
        return poder_total
    }

    
}

const Izz = new Heroi("Izz", "Ranger", 45, 35, true)
let Zarrox = new Heroi("Zarrox", "Mosqueteiro", 45, 33, true)
let Mils = new Heroi("Mils", "lanceiro", 52, 27, true)
const Albero = new Heroi(" Albero", "Mago", 38,57,false)
const Cinaria = new Heroi(" Cinaria", "Mago", 36,42,true)

let armas = new Array('Espada longa', 'Sabre', 'Machado', 'Arco recurvo','Cajado')


//console.log(Izz,Zarrox,Mils,Albero)
console.log(typeof Izz, typeof Zarrox, typeof Mils, typeof Albero, typeof Cinaria)
console.log(Izz.calcular_poder_total())
console.log(Zarrox.calcular_poder_total())
console.log(Mils.calcular_poder_total())
console.log(Albero.calcular_poder_total())
console.log(Cinaria.calcular_poder_total())
console.log(typeof armas)
console.log(armas[2])
