/*Informações*/
let inf = window.document.querySelector('#inf')
let nome = 'Fedor Vladimirovisch Emelianenko'
let nacionalidade = 'Russo'
let idade = 44
let peso = 106
let altura = 1.83
inf.innerHTML = `Lutador: ${nome} <br>`
inf.innerHTML += `Nacionalidade: ${nacionalidade} <br>`
inf.innerHTML += `Idade: ` + idade + ` anos <br>`
inf.innerHTML += `Peso: ` + peso + ` Kg <br>`
inf.innerHTML += `Altura: ` + altura + ` m`

/*Frase do Dia*/
let frase = window.document.querySelector('#frase')
const dia = 10
const mes = 9
const ano = 2021
const frase_do_dia = 'Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligéncia se resume a curiosidade.'
const autoria = 'Aaron Swartz'
frase.innerHTML = dia + '/' + mes + '/' + ano + '<br>'
frase.innerHTML += frase_do_dia + '<br>'
frase.innerHTML += autoria

/*Array de Meses do Ano*/
let x = window.document.querySelector('#meses')
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'junho', 'julho', 'agosto', 'setembro']
x.innerHTML = meses[0] + ', ' + meses[1] + ', ' + meses[3] + ', ' + meses[4] + ', ' + meses[5] + ', ' + meses[6] + ', ' + meses[7] + ', ' + meses[8] + ', ...'

/*Objeto Jogo*/
let jogo = window.document.querySelector('#jogo')
let informacoes = {
    nome: ['Call of Duty'],
    desenvolvedor: ['Activision'],
    ano: [2003]
}
jogo.innerHTML = `Nome: ${informacoes.nome} <br>`
jogo.innerHTML += `Desenvolvido por: ${informacoes.desenvolvedor} <br>`
jogo.innerHTML += `Ano do Lançamento: ${informacoes.ano}`