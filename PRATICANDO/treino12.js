class velocista{
    constructor(nome, codinome, equipe, idade, sexo){
        this._nome = nome
        this._codinome = codinome
        this._equipe = equipe
        this._idade = idade
        this._sexo = sexo
    }

    correr(){
        if(this._sexo === "F"){
            console.log(`Olhem só! É a ${this._codinome}. Ela é rápida de mais!}`)
        }
        else{
        console.log(`Olhem só! É o ${this._codinome}. Ele é rápido de mais!`)
        }
    }

    chamar_equipe(){
        console.log(`${this._codinome} chamando ${this._equipe}!!!`)
    }

    get 
}

let Flash = new velocista("Barry Allen", "Flash", "Liga da justiça", 32, "M")
let Mercúrio = new velocista("Pietro Maximov", "Mercúrio", "Vingadores",30,"M")
let Makkari = new velocista("Makkari", "Makkari","Eternos", 5000,"F")
let Kid_Flash = new velocista("Wally West", "Kid Flash","Jovens Titãs",16, "M" )


Makkari.correr()
Mercúrio.chamar_equipe()
Flash.correr()
Kid_Flash.correr()
Kid_Flash.chamar_equipe()

console.log(Kid_Flash)
