class produto{
    constructor(titulo, autor, editora, valor){
    this._titulo = titulo
    this._autor = autor
    this._editora = editora
    this._valor = valor
    }

}

class livro extends produto{   
    constructor(titulo,autor,editora,valor,genero, qtd_pag){
        super(titulo,autor,editora,valor)
        this._genero = genero
        this.qtd_pag = qtd_pag
    }
}

class quadrinho extends produto{
    constructor(titulo,autor,editora,valor,ilustrador,genero){
        super(titulo,autor,editora,valor)
        this._ilustrador = ilustrador
        this._genero = genero
    }
}

let Um_cadáver_ouve_rádio = new livro ("Um cadáver ouve rádio","Marcos Rey","Golbal Editora", 35.00, "Poicial, Suspense", 128)

let Vingadores_a_queda = new quadrinho ("Vingadores a queda"," Brian Michael Bendis","Marvel/Panini", 18.50,"David Finch", "Super heróis",)

console.log(Um_cadáver_ouve_rádio)
console.log(Vingadores_a_queda)