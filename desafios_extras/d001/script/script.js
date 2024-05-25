/*Informações*/
let inf = window.document.querySelector('#inf')
let nome = 'Fedor Vladimirovisch Emelianenko'
let nacionalidade = 'Russo'
let idade = 44
let peso = 106
let altura = 1.83
inf.innerHTML += `<p>${nome}</p>`
inf.innerHTML += `<p>${nacionalidade}</p>`
inf.innerHTML += `<p>${idade} anos</p>`
inf.innerHTML += `<p>${peso} Kg</p>`
inf.innerHTML += `<p>${altura} m</p>`

/*Frase do Dia*/
let frase = window.document.querySelector('#frase')
const dia = 10
const mes = 9
const ano = 2021
const frase_do_dia = '"Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligencia se resume a curiosidade."'
const autoria = 'Aaron Swartz'
frase.innerHTML += `<p id="dia">${dia}/${mes}/${ano}</p>`
frase.innerHTML += `<p id="frasedia">${frase_do_dia}</p>`
frase.innerHTML += `<p id="autor">${autoria}</p>`

/*Array de Meses do Ano*/
let x = window.document.querySelector('#meses')
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'junho', 'julho', 'agosto', 'setembro']
x.innerHTML += `<p>${meses[0]}, ${meses[1]}, ${meses[2]}, ${meses[3]}, ${meses[4]}, ${meses[5]}, ${meses[6]}, ${meses[7]}, ${meses[8]}, ... </p>`

/*Objeto Jogo*/
let jogo = window.document.querySelector('#jogo')
let informacoes = {
    nome: ['Call of Duty'],
    desenvolvedor: ['Activision'],
    ano: [2003]
}
jogo.innerHTML += `<p>Nome:</p> <p class="x">${informacoes.nome}</p>`
jogo.innerHTML += `<p>Desenvolvedor:</p> <p class="x">${informacoes.desenvolvedor}</p>`
jogo.innerHTML += `<p>Ano do Lançamento:</p> <p class="x">${informacoes.ano}</p>`