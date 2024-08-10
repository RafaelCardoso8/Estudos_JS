//criando o objeto armas
function Criar_arma(nome_arma, poder_arma){  
    return {
        nome_arma : nome_arma,
        poder_arma : poder_arma
    }  
 }
//criando as armas
let Machado_curto = Criar_arma("Machado curto", 20)
let Lança = Criar_arma("Lança", 25)
let Sabre = Criar_arma("Sabre", 19)
let Cajado = Criar_arma("Cajado", 15)

//criando o objeto Herói
function Heroi(nome_heroi, classe_heroi, poder_heroi,magia,atuando, possui_arma, arma){
    this.nome_h = nome_heroi // atributos
    this.classe_h = classe_heroi
    this.poder_h = poder_heroi
    this.magia_h = magia
    this.atuando = atuando
    this.arma_h = possui_arma
    this.arma = arma

    //calculando o poder dos heróis
    this. calcular_poder_total = function(poder_h,magia_h){//método
        let poder_total 
        if(this.arma_h === true){
        poder_total = this.poder_h + this.magia_h + this.arma.poder_arma
        return poder_total
        }
        else{
            poder_total = this.poder_h + this.magia_h 
            return poder_total
        }        
    }
    
    
}
//criando os heróis
const Izz = new Heroi("Izz", "Ranger", 45, 35, true, true,Machado_curto)
let Zarrox = new Heroi("Zarrox", "Mosqueteiro", 45, 33, true, true, Sabre)
let Mils = new Heroi("Mils", "lanceiro", 52, 27, true,true,Lança)
const Albero = new Heroi(" Albero", "Mago", 38,57,false,false, null)
const Cinaria = new Heroi(" Cinaria", "Mago", 36,42,true,true, Cajado)

console.log(Machado_curto)
console.log(Sabre)
console.log(Lança)
console.log(Cajado)

console.log(Izz.calcular_poder_total())
console.log(Zarrox.calcular_poder_total())
console.log(Mils.calcular_poder_total())
console.log(Albero.calcular_poder_total())
console.log(Cinaria.calcular_poder_total())

