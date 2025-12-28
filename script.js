//Referencias DOM
 const body = document.getElementById('body')
 const v1 = document.getElementById('v1')
 const v2 = document.getElementById('v2')
 const v3 = document.getElementById('v3')
 
 

//Modificacoes BOM

let alturatela = window.innerHeight
let larguratela = window.innerWidth


//Declaração de Variaveis

let posicaoY = Math.random()
let posicaoX = Math.random()
let classMosquito = ''
let contadorvida = 1
let contadortempo = 20
let spawnMosca = 1500
let nivel = sessionStorage.getItem('nivel_jogo')

    if(nivel === '1'){
        spawnMosca = 1500
    }
    else if(nivel === '2'){
        spawnMosca = 1200
    }
    else if(nivel === '3'){
        spawnMosca = 850
    }
   
    

// Funções

function TamanhoTela (){

            alturatela = window.innerHeight
            larguratela = window.innerWidth


            console.log(posicaoX, posicaoY)
        }

    TamanhoTela()
    body.onresize = ()=>{
            TamanhoTela()
        }

function posicaoRandomica(){

    if(document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove()

        if(contadorvida>3){

            window.location.href="fim_de_jogo.html"
            
        }

        document.getElementById('v'+contadorvida).src ="imagens/coracao_vazio.png"
        contadorvida += 1

    }


    let posicaoY = Math.random()
    let posicaoX = Math.random()
        
            if(posicaoY < 0.3){
                classMosquito = "mosquito1"

                    posicaoX = Math.floor(posicaoX * larguratela -90)
                    posicaoY = Math.floor(posicaoY * alturatela - 90)
            }
            else if(posicaoY < 0.65){
                classMosquito = "mosquito2"

                    posicaoX = Math.floor(posicaoX * larguratela -175)
                    posicaoY = Math.floor(posicaoY * alturatela - 175)
            }
            else if(posicaoY <= 1){
                classMosquito = "mosquito3"

                    posicaoX = Math.floor(posicaoX * larguratela -300)
                    posicaoY = Math.floor(posicaoY * alturatela - 300)
            }

            posicaoX = posicaoX < 0 ? 0 : posicaoX
            posicaoY = posicaoY < 0 ? 0 : posicaoY

            

    
        let mosquito = document.createElement('img')
        mosquito.src = "imagens/mosca.png"
        mosquito.className = classMosquito
        mosquito.style.left = posicaoX+'px'
        mosquito.style.top = posicaoY+'px'
        mosquito.style.position = 'absolute'
        mosquito.id ="mosquito"
        mosquito.onclick = function (){
            this.remove()
        }
        if (Math.random() < 0.5) {
        mosquito.style.transform = 'scaleX(-1)' // Vira horizontalmente
        }   
        else {
        mosquito.style.transform = 'scaleX(1)'  // Normal
        }

        document.body.appendChild(mosquito)


        }
 let cronometro = setInterval(function(){

    if(contadortempo<0){
        clearInterval(cronometro)
        clearInterval(jogo)
        window.location.href="vitoria.html"
    }
    else{
    document.getElementById('cronometro').innerHTML= contadortempo
    contadortempo--
    }
},1000)

    
//Execução da logica
let jogo = setInterval(function(){
    posicaoRandomica()
},spawnMosca)





