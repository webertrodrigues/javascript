function carregou(){
    var agora = new Date()
    var hora = agora.getHours()
    var txt = window.document.querySelector('#agora')
    var img = window.document.querySelector('#img')
    txt.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if (hora <= 12){
        img.innerHTML = `<img src="imagens/amanhecer-250.png" alt="">`
        window.document.body.style.background = '#FECA78'
    } else if(hora < 18){
        img.innerHTML = `<img src="imagens/atardecer-250.png" alt="">`
        window.document.body.style.backgroundImage = `linear-gradient(150deg, #F27405, #F29705)`
    } else{
        img.innerHTML = `<img src="imagens/anoitecer-250.png" alt="">`
        window.document.body.style.background = `#344255`
    }
}