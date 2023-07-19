// Crie uma função que calcule o valor médio de três números, considerando que esses teram pesos 2, 3, 4 respectivamente.
// Crie uma função que receba um número inteiro e retorne a quantidade de divisores desse número.
function numDividores(num){
    let qntd = 0;
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            qntd++
        }
    }
    return qntd
}
let num = 78;
console.log(`A quantidade de divisores de ${num} é ${numDividores(num)}`)

// Crie uma função que calcule a soma de todos os dígitos de um número.
function numDigitos(num) {
    let numTexto = num.toString();
    let acumulador = 0;
    for(let i = 0; i < numTexto.length; i++){
        acumulador += parseInt(numTexto.charAt(i))
    }
    return acumulador
}
num = 4629;
console.log(`A soma dos digitos de ${num} é ${numDigitos(num)}`)

// Crie uma função que receba uma string e retorne a mesma string, mas com todas as letras em ordem inversa.
function reverterTexto(texto){
    let textoRevertido = "";
    for(let i = texto.length-1; i >= 0; i--){
        textoRevertido += texto.charAt(i);
    }
    return textoRevertido
}
let texto = "Olá, mundo!"
console.log(`A frase ${texto} revertida é ${reverterTexto(texto)}`)

// Crie uma função que receba os valores de comprimento e tempo e retorne a velocidade média.
function velocidadeMedia(comprimento, tempo){
    return(comprimento/tempo);
}
let comprimento = 100
let uniComprimento = "km"
let tempo = 4
let uniTempo = "h"
console.log(`A velocidade de um veiculo que percorreu ${comprimento + uniComprimento} em ${tempo + uniTempo} é ${velocidadeMedia(comprimento, tempo) + uniComprimento + "/" + uniTempo}`)

// Crie uma função que receba uma string e retorne outra string com todas as vogais removidas.
function isVogal(char){
    switch(char.toLowerCase()){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        return true
    }
    return false
}

function removeVogais(texto){
    let textoSemVogal = "";
    for(let i = 0; i < texto.length; i++){
        let char = texto.charAt(i);
        if(!isVogal(char)){
            textoSemVogal += char;
        }
    }
    return textoSemVogal;
}
texto = "JavaScript";
console.log(`'${texto}' sem vogal é ${removeVogais(texto)}`)

// Crie uma função que receba um receba um número no sistema decimal e retorne o mesmo número no sistema binário.
function converterDecimalBinario(num){
    // let numBinario = "";
    // let divisao = num;
    // for(;;){
    //     if(divisao <= 0){
    //         break;
    //     }
    //     let resto = divisao % 2;
    //     divisao = parseInt(divisao / 2);
    //     numBinario = resto + numBinario;
    // }
    // return numBinario;
    if(num <= 0){
        return "";
    }
    let resto = "";
    let divisao = parseInt(num / 2);
    resto += (num % 2)
    resto = converterDecimalBinario(divisao) + resto;
    return resto;
}
num = 25;
console.log(`O número ${num} na base binária é '${converterDecimalBinario(num)}'`)

// Crie uma função que receba um número e uma outra função e execute essa de acordo com número informado.
function repetir (callback, interation){
    for(let i = 0; i < interation; i++){
        callback(i);
    }
}
repetir(index => console.log("Repetição #"+(index+1)), 10);