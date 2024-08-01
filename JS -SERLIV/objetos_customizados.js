function changeName (name){    
    console.log(this)
    this.name = name
}

//changeName("azul fora do escopo global")

const task1 = {
    name: "task1",
    createdAt: new Date(),
    updateAt: new Date(),
    completed: false,
    changeName: changeName
}

const task2 = {
    nome: "task2",
    createdAt: new Date(),
    updateAt: new Date(),
    completed: false
}

task1.changeName("azul atualizado")

console.log(task1)
