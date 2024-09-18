function contarBrinquedos(listaBrinquedos) {
    let contagem = {}; // Um objeto para armazenar a contagem de cada brinquedo

    // Vamos passar por cada brinquedo da lista
    for (let i = 0; i < listaBrinquedos.length; i++) {
        let brinquedo = listaBrinquedos[i];

        // Se o brinquedo já está na contagem, adicionamos 1
        if (contagem[brinquedo]) {
            contagem[brinquedo]++;
        } else {
            // Se o brinquedo ainda não está na contagem, adicionamos ele com valor 1
            contagem[brinquedo] = 1;
        }
    }

    return contagem; // Retorna a contagem de cada brinquedo
}

// Testando o algoritmo
let listaBrinquedos = ["carrinho", "boneca", "bola", "carrinho", "carrinho", "boneca","peão","peão","bola", "bolinha de gude", "bolinha de gude"];
let resultado = contarBrinquedos(listaBrinquedos);

console.log(resultado);