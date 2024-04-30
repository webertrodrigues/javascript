function iniciar(){
    var txtn = window.document.getElementById('txtn')
    var tab = window.document.getElementById('tab')
    if(txtn.value.length == 0){
        window.alert('Por favor, digite um numero valido!')
    }else{
        var num = Number(txtn.value)
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            tab.appendChild(item)
        }
    }
}