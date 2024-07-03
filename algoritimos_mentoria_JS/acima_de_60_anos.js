function acimade60(dados){ //dados são os valores de entrada - ex ["7868190130M7522","5303914400F9211","9273338290F4010"]

let qtd_acima60 = 0

for (let i = 0; i < dados.length; i++){//percorrer o vetor 
    let posicao_dados = dados[i] //posicao_dados recebe a informação que estará na posição indicada por i
    let idade = posicao_dados.substring(11,13) //?idade recebe os valores das posições em string
    let idade_num = parseInt(idade) //converte a string em number

       if(idade_num > 60){
          qtd_acima60++
       }

}

return qtd_acima60
}

console.log(acimade60(["7868190130M7522","5303914400F9211", "9273338290F4010"]));
console.log(acimade60(["1313579440F2036","2921522980M5644"]))  
