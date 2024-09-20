let string_ent = "Ouviram do Ipiranga as margens plácidas De um povo heróico o brado retumbante, E o sol da Liberdade, em raios fúlgidos, Brilhou no céu da Pátria nesse instante. Se o penhor dessa igualdade Conseguimos conquistar com braço forte, m teu seio, ó Liberdade, Desafia o nosso peito a própria morte Pátria amada, Idolatrada, Salve! Salve! Brasil, um sonho intenso, um raio vívido De amor e de esperança à terra desce, Se em teu formoso céu, risonho e límpido, A imagem do Cruzeiro resplandece. Gigante pela própria natureza, És belo, és forte, impávido colosso, E o teu futuro espelha essa grandeza Terra adorada, Entre outras mil, És tu, Brasil, Ó Pátria amada! Dos filhos deste solo és mãe gentil, Pátria amada, Brasil! Deitado eternamente em berço esplêndido, Ao som do mar e à luz do céu profundo, Fulguras, ó Brasil, florão da América, Iluminado ao sol do Novo Mundo! Do que a terra mais garrida Teus risonhos, lindos campos têm mais flores 'Nossos bosques têm mais vida', 'Nossa vida' no teu seio 'mais amores'. Ó Pátria amada, Idolatrada, Salve! Salve! Brasil, de amor eterno seja símbolo O lábaro que ostentas strelado,E diga o verde-louro desta flâmula Paz no futuro e glória no passado. Mas, se ergues da justiça a clava forte, Verás que um filho teu não foge à luta, Nem teme, quem te adora, a própria morte! Terra adorada Entre outras mil, És tu, Brasil, Ó Pátria amada! Dos filhos deste solo és mãe gentil, Pátria amada, Brasil!"

function freq_palavras(string_ent){
    let arr_str = string_ent.split(" ")
    let arr_saida =[]
    let obj_saida ={}
  
    let cont = 0
    for(i = 0; i < arr_str.length; i++){
        arr_saida.push(arr_str[i])
        cont = 0

        for(j = 0; j < arr_saida.length; j++){
            if( arr_saida[i] === arr_str[j]){
                cont = cont + 1
            }

        }
        
        obj_saida[arr_saida[i]] = cont
    }
    
    return obj_saida
}


console.log(freq_palavras(string_ent))