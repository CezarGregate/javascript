function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    // var data = new Date()

    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        img.src = 'manha.jpg'
        document.body.style.background = "#F2A341";
    } else if (hora >= 12 && hora <=18) {
        img.src = 'tarde.jpg'
        document.body.style.background = "#BF4A30";
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = "#022859";
    }
}