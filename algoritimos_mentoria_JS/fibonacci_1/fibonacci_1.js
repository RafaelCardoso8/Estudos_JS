function fibonacci(nun1,nun2,qtd){
    let n1 , n2, quant, res

    n1 = nun1
    n2 = nun2
    quant = qtd

    console.log(n1)
    console.log(n2)
    for( i = 0; i < quant; i++){
       res = n1 + n2
       console.log(res)

       n1 = n2
       n2 = res   
    }
    console.log("--------------")
}

fibonacci(8,16,6)
fibonacci(1,3,6)
fibonacci(3,9,6)