let m_ent= [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

function pares(m_ent){
    let n_pares = []


    for(i = 0; i < m_ent.length; i++ ){
        for(j = 0; j < m_ent[i].length; j++){
            if(m_ent[i][j] % 2 == 0){
               n_pares.push(m_ent[i][j])
            }
        }
    }

    return n_pares
}

console.log(pares(m_ent))