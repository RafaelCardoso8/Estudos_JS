let vet_ent = []

function maior_n(vet_ent){
    let n_maior = vet_ent[0]
    for(i = 0; i < vet_ent.length; i++ ){
        if( n_maior > vet_ent[i]){
            n_maior = n_maior
        }
        else{
            n_maior = vet_ent[i]
        }

    }

    return n_maior

}

console.log(maior_n([2,30,4,5,9,32,18,8]))