function Task(nome, valor){
    this.nome = nome
    this.valor = valor
    this.created = new Date()
    this.updateAt = null
    this.alterar_nome = function(novonome){
        this.nome = novonome
        this.updateAt++
    }

}

const Task1 = new Task("tarefa 1", 1)
const Task2 = new Task("tarefa 2", 2)
const Task3 = new Task("tarefa 3", 3)
console.log(Task1)

Task1.alterar_nome("Tarefa atualizada")



console.log(Task1)
//console.log(Task2)
//console.log(Task3)