
const btnIniciar = document.getElementById("btnIniciar")
const select = document.getElementById('select')


btnIniciar.onclick= function(){
    const nivel = select.value
    if(nivel === ''){

        alert('Selecione um nível')
        return
    }

    sessionStorage.setItem('nivel_jogo',nivel)
   window.location.href="app.html"
}