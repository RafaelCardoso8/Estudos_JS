class mago{
    constructor( nome, elemento, sexo, familiar,grupo){
        this._nome = nome
        this._elemento = elemento
        this._sexo = sexo
        this._familiar = familiar
        this._grupo = grupo
    }
    invocar_familiar(){
        return `${this._nome} invocou o familiar que é um ${this._familiar}.`
    }

    set grupo(nome_grupo){
        this._grupo = nome_grupo
    }

    get grupo(){
        if(this._grupo === "Grande Floresta"){
        return `Abaixo dos nossos pés, na altura dos nossos olhos e acima de nossas cabeças. Salve a ${this._grupo}!`
        }
        else if(this._grupo === "Escola do Deserto"){
            return `As areias e o calor trazem sabedoria e resiliência. nossa magia é forjada no calor do grande sol. Se for capaz, adentre na ${this._grupo}! `
        }
        else if(this._grupo === "Orixis"){
            return `Que o poder dos nossos ancestrais guiem nossos caminhos na magia. Agradeçemos a proteção dos nossos ${this._grupo}! `
        }
        else{
            return`Absoluta é a nossa força. Aprendam a combater pois eu sou membro das ${this._grupo}!`
        }
    }
}

class Mago_do_combate extends mago{
    constructor(nome, elemento, sexo, familiar, grupo,n_vitorias, atq_especial){
        super(nome,elemento,sexo, familiar,grupo)
        this._n_vitorias = n_vitorias
        this._atq_especial = atq_especial        
    }

    metodo_ataque_especial(){
        return `Esse é o meu ataque: ${this._atq_especial}!!!`
    }

    set n_vitorias(vitorias_atuais){
        this._n_vitorias = vitorias_atuais
    }

    get n_vitorias(){
        return `${this._nome} possui ${this._n_vitorias}.`
    }
}

let Mago_Rafael = new mago("Rafael", "terra", "masculino", "tatu","Grande Floresta")
let Maga_Joyce = new mago("Joyce", "água", "feminino", "ganso", "Grande Floresta")
let Mago_Thofi = new mago("Thofi", "luz", "masculino", "macaco", "Escola do Deserto")
let Maga_Asani = new mago("Asani", "fogo", "feminino", "borboleta", "Orixis")
let Mago_Zarroux = new Mago_do_combate("Zarroux", "fogo", "masculino","","Feras Misticas", 18, "MATILHA IGNEA")


console.log(Mago_Rafael.grupo)
//console.log(Mago_Rafael.invocar_familiar())
console.log(Maga_Joyce.grupo)
//console.log(Maga_Joyce.invocar_familiar())
console.log(Mago_Thofi.grupo)
//console.log(Mago_Thofi.invocar_familiar())
console.log(Maga_Asani.grupo)
console.log(Mago_Zarroux.grupo)
//console.log(Maga_Asani.invocar_familiar())
console.log(Mago_Zarroux.metodo_ataque_especial())
Mago_Zarroux._n_vitorias = 20
console.log(Mago_Zarroux.n_vitorias)

