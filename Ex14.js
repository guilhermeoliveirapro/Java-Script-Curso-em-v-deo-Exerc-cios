function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 5) {
        //boa madrugada
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#071c1f'
        msg.innerHTML = `Agora são ${hora} horas da madrugada.`
    } else if (hora >=5 && hora <=12) {
        //bom dia
        img.src = 'fotomanhã.png'
        document.body.style.background = '#fff9f6'
        msg.innerHTML = `Agora são ${hora} horas da manhã.`
    } else if (hora >12 && hora <18) {
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#e7ac57'  
        msg.innerHTML = `Agora são ${hora} horas da tarde.`
    } else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#3a3c37'
        msg.innerHTML = `Agora são ${hora} horas da noite.`
    }
}
