var num = [3, 1, 5, 4 ,2]
num.push(6)
num.sort()
num[6] = 7

for(var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

/*for(var c = 0; c < num.length; c++){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}

console.log(`A minha variável num e igual a ${num}`)
console.log(`A minha variável num tem ${num.length} posições`)
console.log(`O primeiro valor da minha variável num e ${num[0]}`)*/