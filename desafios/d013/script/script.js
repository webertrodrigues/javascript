function verificar(){
    var p = window.document.getElementsByTagName('p')[0]
    p.innerHTML = ``
    var nome_aluno = window.prompt('Qual é o nome do aluno?')
    var nota1 = Number(window.prompt(`Primeira nora de ${nome_aluno}:`))
    var nota2 = Number(window.prompt(`Segunda nora de ${nome_aluno}:`))
    var res = window.document.querySelector('#res')
    res.innerHTML = `<h2>Analisando a situação de ${nome_aluno}</h2>`
    var media = (nota1 + nota2)/2
    res.innerHTML += `<p>Com as notas ${nota1.toLocaleString('pt')} e ${nota2.toLocaleString('pt-BR')}, a<strong> média é ${media.toLocaleString('pt-BR')}</strong></p>`
    if (media < 3){
        res.innerHTML += `<p>Com a média abaixo de 3,0, o aluno está <mark style="color: darkred; background-color: lightpink"><strong>REPROVADO</strong></mark></p>`
    } else if (media <= 6){
        res.innerHTML += `<p>Com a média entre 3,0 e 6,0, o aluno está <mark style="color: #bebe00; background-color: lightyellow"><strong>RECUPERAÇÃO</strong></mark></p>`
    } else {
        res.innerHTML += `<p>Com a média acima de 6,0, o aluno está <mark style="color: darkgreen; background-color: lightgreen"><strong>APROVADO</strong></mark></p>`
    } 
}