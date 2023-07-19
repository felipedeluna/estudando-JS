// Crie uma função que receba um vetor de números e retorne a soma de todos os elementos.
let vetor = [1, 2, 3, 4, 5, 6]
let soma = 0
function somarTodosForEach(vetor){
    for(let i of vetor){
        soma += i
    }
    return soma
}
console.log(somarTodosForEach(vetor))
console.log();
// Crie uma função que receba um vetor de palavras e retorne a concatenação de todas as palavras em uma única string.
const linguagens = ["HTML", "CSS", "JS", "SQL"]
function juncao(textos){

}

console.log(linguagens.join(", "))
console.log()
// Crie uma função que receba um vetor de números e retorne o maior valor presente no vetor.
function maiorDoVetor(vetor){
    let maior = Number.NEGATIVE_INFINITY;
    for(let n of vetor){
        if(n > maior){
            maior = n;
        }
    }
    return maior
}

console.log(`O maior número do vetor é ${maiorDoVetor(vetor)}`)
console.log()
// Crie uma função que receba um vetor de números e retorne a média dos elementos.
function mediaDoVetor(vetor){
    let total = 0;
    let tamanho = vetor.length
    for(let n of vetor){
        total += n
    }
    return total/tamanho
}
console.log(mediaDoVetor(vetor))
console.log()

// Dado um array de números, utilize o método map para retornar um novo array com cada número elevado a 2.
// let vetor2 = vetor.map(v => (v ** 2))
console.log(vetor.map(v => (v ** 2)))
// console.log(vetor2)
console.log()

// Dado um array de palavras, utilize o método filter para retornar um novo array contendo apenas as palavras que começam com a letra 'A'.
let palavras = ["Amanhã","Hoje","Ontem","Alecrim","Arbusto","Jorge"]
console.log(palavras.filter(palavra => (palavra[0] == "A")))
console.log()

// Dado um array de números, utilize o método forEach para imprimir no console cada número multiplicado por 3.
vetor.forEach(v => console.log(`${v} x 3 = ${v*3}`))
console.log()

// Dado um array de números, utilize o método includes para verificar se o número 10 está presente no array.
console.log(vetor.includes(10));

