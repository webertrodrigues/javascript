// Variável global para armazenar os números compostos
var números = []
var res = window.document.querySelector('#res')
var tab = window.document.querySelector('#tab')
var txtnum = window.document.querySelector('#txtnum')
contador = -1

function adicionar(){
    var num = Number(txtnum.value) // Obtendo o valor do campo de entrada
    if(txtnum.value.length == 0 || num > 100 || num <= 0 || números[números.indexOf(num)] == num){ //se não tiver nada ou numero digitado for acima de 100 ou numero[chave com base no numero digitado)] == numero digitado
        window.alert(`Valor invalido ou ja encontrado na lista.`)
    } else if(num >= 0 && num <= 100){
        números.push(num) // Adicionando o número à array números
        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`;
        tab.appendChild(item)
        contador+=1
    }
    res.innerHTML = ``
    txtnum.value = ''
    txtnum.focus()
}
function finalizar(){
    if(tab.length == 0){ //se o select estiver se nada alertar ao usuário
        window.alert(`Adicione valores antes de finalizar!`)
    } else {
        números.sort() // organizar em ordem decrescente
        res.innerHTML = `<p>Ao todo, temos ${números.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${números[contador]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${números[0]}.</p>`
        var soma = 0 //especifiquei que e atribuído a 0, pois se não fia NaN
        for(var c = 0; c <= contador; c++){
            soma += números[c] //somador com base nos números digitados
        }
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        var media = soma/números.length //valor da soma dividido pela quantidade elemento da array numeros
        res.innerHTML += `<p>A media dos valores digitados e ${media}.</p>`
    }
}