
function gerarNumeroAleatorio() {
    // Gera um número aleatório entre 1 e 6
    return Math.floor(Math.random() * 6) + 1;
}

function gerarQuatroNumeros() {
    let numeros = [];
    for (let i = 0; i < 4; i++) {
        numeros.push(gerarNumeroAleatorio());
    }
    return numeros;
}

// Gerar e imprimir os quatro números aleatórios
let quatroNumeros = gerarQuatroNumeros();
console.log(quatroNumeros);

