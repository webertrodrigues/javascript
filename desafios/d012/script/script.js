function clicou(){
    var preço_ant = Number(window.prompt('Qual é o preço anterior do produto?'))
    var preço_atu = Number(window.prompt('Qual é o preço atual do produto?'))
    var p = window.document.getElementsByTagName('p')[0]
    p.innerHTML = ``
    var res = window.document.querySelector('#res')
    res.innerHTML = `<h2>Analisando os valores informados</h2>`
    res.innerHTML += `<p>O produto custava ${preço_ant.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${preço_atu.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
    if (preço_atu > preço_ant){
        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        var aumento = preço_atu - preço_ant
        res.innerHTML += `<p>O preço subiu ${aumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`
        var aumento_porcento = ((preço_atu/preço_ant)-1)*100
        res.innerHTML += `<p>Uma variação de ${aumento_porcento.toLocaleString('pt-BR')}% pra cima.</p>`
    } else {
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        var diminuição = preço_ant - preço_atu 
        res.innerHTML += `<p>O preço caiu ${diminuição.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`
        var queda_porcentagem = (1-(preço_atu/preço_ant))*100
        res.innerHTML += `Uma variação de ${queda_porcentagem.toLocaleString('pt-BR')}% pra baixo.`
    }
}