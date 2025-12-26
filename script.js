//Referencias DOM
 const body = document.getElementById('body')

//Modificacoes BOM

let alturatela = window.innerHeight
let larguratela = window.innerWidth


//Declaração de Variaveis

let posicaoY = Math.random()
let posicaoX = Math.random()
let classMosquito = ''

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

        if (Math.random() < 0.5) {
        mosquito.style.transform = 'scaleX(-1)' // Vira horizontalmente
        }   
        else {
        mosquito.style.transform = 'scaleX(1)'  // Normal
        }

        document.body.appendChild(mosquito)


        }
    
//Execução da logica

posicaoRandomica()


