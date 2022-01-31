function carregar() {
    var  msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.` 
    if(hora >=0 && hora < 12){
        // BOM DIA
        img.src = './imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
        msg2.innerHTML = 'Bom Dia!'
    } else if(hora >= 12 && hora <= 18){
        // BOA TARDE
        img.src = './imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
        msg2.innerHTML = 'Boa Tarde!'
    } else {
        // BOA NOITE
        img.src = './imagens/noite.jpg'
        document.body.style.background = '515154'
        msg2.innerHTML = 'Boa Noite!'
    }







}
