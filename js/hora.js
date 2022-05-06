function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}horas e ${minuto}minutos.`
    if (hora >=0 && hora < 6) {
        //BOA MADRUGADA!
        document.body.style.background = '#231f20'
        img.src = 'imagens/boamadrugada.png'
    }
    else if (hora >= 6 && hora <12) {
        //BOM DIA!
        document.body.style.background = '#a35322'
        img.src = 'imagens/bomdia.png'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        document.body.style.background = '#9cd308'
        img.src = 'imagens/boatarde.png'
    } else if (hora >= 18) {
        //BOA NOITE!
        document.body.style.background = '#11151b'
        img.src = 'imagens/boanoite.png'
    }
}
