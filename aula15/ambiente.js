let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é ${num}`)
num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Nosso vetor organizado é ${num}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
