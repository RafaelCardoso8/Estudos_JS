class Nave_da_frota_Estelar{
    constructor(){
        this.n_frota = 1
        this.array_nave = []
        

    }

    salvar(){
        
        let nave = this.ler_dados()
        if(this.valida_campos(nave)){
        this.adicionar(nave)
        }
        this.listatabela()
        this.cancelar()
    }

    listatabela(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ""
        for(let i = 0; i < this.array_nave.length; i++){
            let tr = tbody.insertRow()

            let td_n_frota =  tr.insertCell()
            let td_nomenave =  tr.insertCell()
            let td_classe =  tr.insertCell()
            let td_capitao =  tr.insertCell()
            let td_veldobra =  tr.insertCell()
            let td_armamento =  tr.insertCell() 
            let td_tripulacao =  tr.insertCell()
            let td_acoes =  tr.insertCell()

            td_n_frota.innerText = this.array_nave[i].n_frota
            td_nomenave.innerText = this.array_nave[i].nomenave
            td_classe.innerText = this.array_nave[i].classe  
            td_capitao.innerText = this.array_nave[i].capitao  
            td_veldobra.innerText = this.array_nave[i].veldobra  
            td_armamento.innerText = this.array_nave[i].armamento 
            td_tripulacao.innerText = this.array_nave[i].tripulacao  

            let img_enviar = document.createElement("img")
            img_enviar.src = 'img/setas-para-cima.png'
            img_enviar.onclick = (function(id) {
               return function() {
                   nave_da_frota_estelar.enviar_para_missao(id)
               }
            })(this.array_nave[i].n_frota)

            let img_retornar = document.createElement("img")
            img_retornar.src = 'img/setas-para-baixo.png'
            img_retornar.onclick = (function(id) {
                return function() {
                    nave_da_frota_estelar.retornar_de_missao(id);
                };
            })(this.array_nave[i].n_frota);
            
            /*let img_enviar = document.createElement("img")
            img_enviar.src = 'img/setas-para-cima.png'
            img_enviar.setAttribute("onclick","nave_da_frota_estelar.enviar_para_missao(" + this.array_nave[i].n_frota+")")

            let img_retornar= document.createElement("img")
            img_retornar.src = 'img/setas-para-baixo.png'
            img_retornar.setAttribute("onclick","nave_da_frota_estelar.retornar_de_missao("+ this.array_nave[i].n_frota+")")*/

            td_acoes.appendChild(img_enviar)
            td_acoes.appendChild(img_retornar)
            
        }

    }
    adicionar(nave){
        this.array_nave.push(nave)
        this.n_frota++

    }
    cancelar(){
        document.getElementById('nome').value =""
        document.getElementById('classe').value =""
        document.getElementById('capitao').value = ""
        document.getElementById('veldobra').value = ""
        document.getElementById('armamento').value = ""
        document.getElementById('tripulacao').value = ""      

    }
    construir(){
        alert("Nave em reparo ou passando por melhorias.")


    }
    ler_dados(){
        let nave = {}

        nave.n_frota = this.n_frota        
        nave.nomenave = document.getElementById('nome').value
        nave.classe = document.getElementById('classe').value
        nave.capitao = document.getElementById('capitao').value
        nave.veldobra = document.getElementById('veldobra').value
        nave.armamento = document.getElementById('armamento').value
        nave.tripulacao = document.getElementById('tripulacao').value

        return nave      

    }
    valida_campos(nave){
        let msg = ""
        if(nave.nomenave == ""){
            msg += "Informe o nome da nave. \n"            
        }
        if(nave.classe == ""){
            msg += "Informe a classe. \n"            
        }
        if(nave.capitao == ""){
            msg += "Informe o nome do Capitão. \n"            
        }
        if(nave.veldobra == ""){
            msg += "Informe o valor da velocidade de  dobra. \n"            
        }
        if(nave.armamento == ""){
            msg += "Informe o nível de armamento(básico, médio ou alto). \n"            
        }
        if(nave.tripulacao == ""){
            msg += "Informe a quantidade de tripulantes. \n"            
        }
        if(msg != ""){
            alert(msg)
            return false
        }
        return true
    }
    enviar_para_missao(id){
        alert("enviada para a nave " + id)
        let linha = document.getElementById(id)
        linha.classList.remove('retorno')
        linha.classList.add('missao')

    }
    retornar_de_missao(id){
        alert("retornar de missão " + id)
        let linha = document.getElementById(id)
        linha.classList.remove('missao')
        linha.classList.add('retorno')
        
    }
}

let nave_da_frota_estelar = new Nave_da_frota_Estelar()