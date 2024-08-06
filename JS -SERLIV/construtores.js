function Tarefa(parametro_nome){
    let _nome = parametro_nome

    //this.nome = parametro_nome
    this.criado_em = new Date()
    this.alterou_nome_em = "null"

    this.alterar_nome = function(novo_nome){
        this.nome = novo_nome
        this.alterou_nome_em = new Date()
    }
}

const tarefa1 = new Tarefa("Azul 0")
const tarefa2 = new Tarefa("Azul 1")
const tarefa3 = new Tarefa("Azul 2")

console.log(tarefa1)
console.log(tarefa2)
console.log(tarefa3)

tarefa1.alterar_nome("Azul 0 atualizado")
tarefa2.alterar_nome("Azul 1 Atualizado")

console.log(tarefa1)
console.log(tarefa2)
console.log(tarefa3)
