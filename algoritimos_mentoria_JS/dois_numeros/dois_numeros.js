

function dois_n(arr_ent, target){
    let arr_saida = []
    for(i = 0; i < arr_ent.length; i++){        
        if((arr_ent[i] + arr_ent[i+1]) == target){
            arr_saida.push(i , (i+1))
            break
        } 
    }
    return arr_saida

}

console.log(dois_n([2,7,11,15] , 9))
console.log(dois_n([3,2,4] , 6))
console.log(dois_n([3,3] , 6))
console.log(dois_n([2,4,1,4,4] , 8))