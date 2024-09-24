function remove_elemento(arr_ent, n_ent){
    let arr = arr_ent
    let n = n_ent
    let arr_result = []

    for(i = 0; i < arr.length; i++){
        if( arr[i] !== n){
            arr_result.push(arr[i])
        }

    }
    return arr_result.length

}


console.log(remove_elemento([2,2,3,3], 3))
console.log(remove_elemento([0,1,2,2,3,0,4,2], 2))
console.log(remove_elemento([1,8,3,7,8,1,1,8,3,57,1,8], 1))
