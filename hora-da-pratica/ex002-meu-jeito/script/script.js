function iniciar(){
    var data = new Date()
    var ano_atual = data.getFullYear() //identificar ano atual
    var ano = Number(window.document.querySelector('#ano').value) //armazenar ano digitado
    var resultado = window.document.querySelector('#resultado') //selecionar local onde o resultado será colocado 
    var img = window.document.createElement('img') //criação de uma tag/elemento img
    img.setAttribute('id', 'foto') //Atribuindo um id = foto na tag/elemento img
    if (ano.length == 0 || ano >= ano_atual){ //criando mensagem de erro caso o ano digitado seja maior que o atual e caso seja 0
     window.alert('Verifique os dados e tente novamente.')   
    } else {
        var sexo = window.document.getElementsByName('radsex') //selecionando a radio input
        var idade = ano_atual - ano //calculando idade
        if(sexo[0].checked){ //executa bloco abaixo, caso o radio masculino seja selecionado
            var genero = `Homem`
            if (idade <= 5){
                img.setAttribute('src', 'imagens/homem-bebe-250.png')
            } else if (idade < 10){
                img.setAttribute('src', 'imagens/homem-criança-pequena-250.png')
            } else if (idade < 15){
                img.setAttribute('src', 'imagens/homem-criança-250.png')
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/homem-adolescente-250.png')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/homem-adulto-250.png')
            } else {
                img.setAttribute('src', 'imagens/homem-idoso-250.png')
            }
        } else { //executa o bloco abaixo, caso o radio feminino seja selecionado
            var genero = `Mulher`
            if (idade <= 5){
                img.setAttribute('src', 'imagens/mulher-bebe-250.png')
            } else if (idade < 10){
                img.setAttribute('src', 'imagens/mulher-criança-pequena-250.png')
            } else if (idade < 14){
                img.setAttribute('src', 'imagens/mulher-criança-250.png')
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/mulher-adolescente-250.png')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/mulher-adulta-250.png')
            } else {
                img.setAttribute('src', 'imagens/mulher-idosa-250.png')
            }
        }
        resultado.style.textAlign = 'center' 
        resultado.innerHTML = `<p>Encontramos ${genero} com ${idade} anos.</p>`
        resultado.appendChild(img)
    }
}