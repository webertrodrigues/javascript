function iniciar(){
    var inicio = window.document.querySelector('#inicio')
    var fim = window.document.querySelector('#fim')
    var passo = window.document.querySelector('#passo')
    var res = window.document.querySelector('#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert(`[ERRO] Faltam dados!!`)
    } else if(passo.value <= 0){
        res.innerHTML = `<p>Impossível contar</p>`
    } else {
        res.innerHTML = `<p>Contando:</p>`
        var inicio = Number(inicio.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)
        if(inicio < fim){
            for(inicio; inicio <= fim; inicio += passo){
                res.innerHTML += ` ${inicio} \u{1F449}`
            }
        } else {
            for(inicio; inicio >= fim; inicio -= passo){
                res.innerHTML += ` ${inicio} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3F4}`
        
    } 
}