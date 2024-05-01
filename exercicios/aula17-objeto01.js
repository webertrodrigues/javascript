var amigo = {
    nome:'Jose',
    sexo:'M',
    peso: 85.4,
    engordou(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordou(3)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)