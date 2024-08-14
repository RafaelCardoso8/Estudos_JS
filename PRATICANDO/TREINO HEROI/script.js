// Array para armazenar armas criadas
let armas = []

// Função para criar uma arma
function criarArma(nome_arma, poder_arma){  
    return {
        nome_arma: nome_arma,
        poder_arma: poder_arma
    }
}

// Função para criar um card de arma
function criarCartaArma(arma) {
    const carta = document.createElement('div')
    carta.classList.add('carta-arma')

    carta.innerHTML = `
        <h3>${arma.nome_arma}</h3>
        <p>Poder: ${arma.poder_arma}</p>
        <button class="botao-excluir">X</button>
    `

    // Função para excluir o card da arma
    carta.querySelector('.botao-excluir').addEventListener('click', () => {
        carta.remove()
        armas = armas.filter(a => a.nome_arma !== arma.nome_arma)
        atualizarOpcoesArma()
    })

    document.getElementById('cartas-armas').appendChild(carta)
}

// Função para atualizar as opções de armas no formulário de herói
function atualizarOpcoesArma() {
    const armaSelect = document.getElementById('arma');
    armaSelect.innerHTML = ''
    // Limpar as opções anteriores

    armas.forEach(arma => {
        const option = document.createElement('option')
        option.value = arma.nome_arma
        option.textContent = arma.nome_arma
        armaSelect.appendChild(option)
    })
}

// Evento para criar uma nova arma
document.getElementById('formulario-arma').addEventListener('submit', (e) => {
    e.preventDefault()

    const nome_arma = document.getElementById('nome_arma').value
    const poder_arma = parseInt(document.getElementById('poder_arma').value)

    const novaArma = criarArma(nome_arma, poder_arma)
    armas.push(novaArma)

    criarCartaArma(novaArma)
    atualizarOpcoesArma()
    document.getElementById('formulario-arma').reset()
});

// Função construtora de heróis
function Heroi(nome_heroi, classe_heroi, poder_heroi, magia, atuando, possui_arma, arma){
    this.nome_h = nome_heroi
    this.classe_h = classe_heroi
    this.poder_h = poder_heroi
    this.magia_h = magia
    this.atuando = atuando
    this.arma_h = possui_arma
    this.arma = arma

    this.calcularPoderTotal = function(){
        let poder_total = this.poder_h + this.magia_h
        if(this.arma_h && this.arma) {
            poder_total += this.arma.poder_arma
        }
        return poder_total
    };
}

// Função para criar um novo card de herói
function criarCartaHeroi(heroi) {
    const carta = document.createElement('div')
    carta.classList.add('carta-heroi')

    carta.innerHTML = `
        <h3>${heroi.nome_h} (${heroi.classe_h})</h3>
        <p>Poder: ${heroi.poder_h}</p>
        <p>Magia: ${heroi.magia_h}</p>
        <p>Arma: ${heroi.arma ? heroi.arma.nome_arma : "Nenhuma"}</p>
        <p>Poder Total: ${heroi.calcularPoderTotal()}</p>
        <button class="botao-excluir">X</button>
    `

    // Função para excluir o card do herói
    carta.querySelector('.botao-excluir').addEventListener('click', () => {
        carta.remove();
    })

    document.getElementById('cartas-herois').appendChild(carta)
}

// Evento para criar um novo herói
document.getElementById('formulario-heroi').addEventListener('submit', (e) => {
    e.preventDefault()

    const nome_heroi = document.getElementById('nome_heroi').value
    const classe_heroi = document.getElementById('classe_heroi').value
    const poder_heroi = parseInt(document.getElementById('poder_heroi').value)
    const magia_h = parseInt(document.getElementById('magia_h').value)
    const atuando = document.getElementById('atuando').value === "true"
    const arma_h = document.getElementById('arma_h').value === "true"
    const armaSelecionada = armas.find(arma => arma.nome_arma === document.getElementById('arma').value)

    const novoHeroi = new Heroi(nome_heroi, classe_heroi, poder_heroi, magia_h, atuando, arma_h, arma_h ? armaSelecionada : null)

    criarCartaHeroi(novoHeroi)
    document.getElementById('formulario-heroi').reset()
})

// Evento para alternar entre a visualização de heróis e armas
document.getElementById('mostrar-herois').addEventListener('click', () => {
    document.getElementById('cartas-herois').style.display = 'flex'
    document.getElementById('cartas-armas').style.display = 'none'
})

document.getElementById('mostrar-armas').addEventListener('click', () => {
    document.getElementById('cartas-herois').style.display = 'none'
    document.getElementById('cartas-armas').style.display = 'flex'
})

// Habilitar/Desabilitar seleção de arma com base na opção "Possui Arma"
document.getElementById('arma_h').addEventListener('change', (e) => {
    document.getElementById('arma').disabled = e.target.value !== "true"
})
