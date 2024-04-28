function verificar(){
    var ano = Number(window.prompt('Qual é o ano que você quer verificar?'))
    var p = window.document.getElementsByTagName('p')[0]
    var res = window.document.querySelector('#res')
    p.innerHTML = ``
    if(ano%4 == 0 && ano%100 >= 1 || ano%400 == 0){
        res.innerHTML = `<p>O ano de ${ano} <mark style='color: darkgreen; background-color: lightgreen;'><strong>É BISSEXTO &#X2714;</strong></mark></p>`
    } else {
        res.innerHTML = `<p>O ano de ${ano} <mark style='color: darkred; background-color: lightpink;'><strong>NÃO É BISSEXTO &#X274C;</strong></mark></p>`
    }
}