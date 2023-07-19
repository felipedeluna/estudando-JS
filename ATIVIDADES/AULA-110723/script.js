// Escreva um programa que receba um texto e calcule a quantidade de letra de "a". O programa deve considerar maisculas e minusculas.
let texto_a = "Amoeba"
let num_a = 0
for(let i = 0; i < texto_a.length; i++){
    if(texto_a.charAt(i) == "A" || texto_a.charAt(i) == "a"){
        num_a++
    }
}
console.log(`A palavra ${texto_a} tem ${num_a} letras a.`)

// Escreva um programa que calcule a raiz quadrada de um número e mostre na tela.
let num_raiz = 25;
console.log(`A raiz quadrada de ${num_raiz} é igual a ${Math.sqrt(num_raiz)}`);

// Escreva um programa que  arredonde um número para o inteiro mais próximo.
let num_int_prox = 15.5742;
console.log(`${num_int_prox} arredondando para o mais próximo é ${Math.round(num_int_prox)}`)

// Escreva um programa que  calcule o valor absoluto de um número.
let num = -20
console.log(`O número absoluto de ${num} é igual à ${Math.abs(num)}.`)

// Escreva um programa que  gere um número aleatório entre 10 e 20.
console.log(Math.floor(Math.random() * 10 + 10));

// Arredonde um número para um número específico de casas decimais.
let num_espc = 10.52584
let num_dec = 2
console.log(num_espc.toFixed(num_dec));

// Escreva um programa que  converta uma string para um número decimal e arredonde para o número inteiro anterior.


// Verifique se um número é um valor finito, infinito, NaN ou não.

num = Infinity;
if(isNaN(num)){
    console.log("Not a Number")
} else {
    console.log("Number")
    if(isFinite(num)){
        console.log(`Finite`)
    }else {
        console.log(`Infinity`)
    }
}

// Escreva um programa que verifique se a string "ba" contém em outras outra string.
let texto_ba =  "Minha mãe fez doce de batata mas eu prefiro doce de goiaba"
if(texto_ba.includes("ba")){
    console.log(`Contem ba`)
} else {
    console.log(`Não contem ba`)
}

// Escreva um programa que  converte uma string para letras maiúsculas e para letras minúsculas e mostre na tela.
console.log(`${texto_ba}`)
console.log(`${texto_ba.toLowerCase()}`)
console.log(`${texto_ba.toUpperCase()}`)

// Extraia uma parte específica de uma string com base em índices.
console.log(`De 0-18 tem-se "${texto_ba.substring(0,18)}"`)

// Substitua todas as ocorrências de uma substring por outra em uma string.
console.log(`${texto_ba.replaceAll("batata", "banana")}`)

// Remova espaços em branco extras no início e no final e no final de uma string.
let texto_esp_brancos = " asda asdsas sada "
console.log(texto_esp_brancos.trim());

// Inverta uma string. Utilize o laço for.
let textoInvertido = "";
for(let i = texto_ba.length-1; i>= 0; i--){
    textoInvertido += texto_ba.charAt(i);
}
console.log(`${textoInvertido}`)
