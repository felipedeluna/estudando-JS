// Escreva um programa que imprima os números de 1 a 20 usando um loop for.

// for(let i = 1; i <=20; i++){
//     console.log(i)
// }

// Escreva um programa que exiba os números de Fibonacci até o décimo termo. Os números de Fibonacci são formados pela sequência 0, 1, 1, 2, 3, 5, 8, 13, ... em que cada número é a soma dos dois anteriores. Use um loop while para gerar a sequência.

// Nicolas
// let num_ant = 0;
// let num_atual = 1;

// console.log(num_ant);

// let i = 1;

// while (i < 10) {
//     console.log(num_atual);
//     let prox_num = num_ant + num_atual;
//     num_ant = num_atual;
//     termoAtual = prox_num;
//     i++;
// }

// Professor
// let p = 0;
// let u = 1;
// let i = 0; //contador
// let num_term = 10;

// while(i < num_term){

//     console.log(p);
//     let soma = p + u;
//     p = u;
//     u = soma;
//     i++

// }


// console.log("Crie um programa que receba um número e calcule a soma de todos os números ímpares até esse número. Use um loop for e uma estrutura condicional if para verificar se cada número é ímpar.") 

// let num_lim = 5;
// let num_soma = 0;

// for(let i = 0; i <= num_lim; i++){
//     if(i % 2 == 0){
//         continue;
//     }
//     num_soma += i
    
// }
// console.log(num_soma)

// console.log("Faça um programa que receba um número e exiba a tabuada da soma desse número usando um loop for.") 

// let num_tab = 2;

// for(let i = 0; i <= 9; i++){
//     console.log(`${num_tab} + ${i} = ${num_tab + i}`)
// }

// console.log("Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.");

// for(let i = 1; i<=100; i++){
//     if(!(i % 7 == 0)){
//         continue;
//     }
//     console.log(i);
// }


// console.log("Escreva um programa que receba um número e desenhe na tela um triângulo formado por *.");

// let altura = 8;
// let linha = "";

// for(let i = 0 ; i < altura; i++){
//     linha += "* ";
//     console.log(linha);
// }

//Desenhar um quadrado com @, mas seu iterior deve ser oco.

let lado = 5;
let linha = "";
for(let y = 1; y<= lado; y++){
    linha = "";
    for(let x = 1; x<= lado; x++){
        if(y == 1 || y == lado || x == 1 || x == lado){
            linha += "@ "
        }else{
            linha += "  "
        }
    }
    console.log(linha)
}

// let lado = 5;
// let linha = "";
// for(let i = 0; i < lado; i++){
//     linha += "@ "
// }
// let oco = "@ "
// console.log(linha)
// for(let i = 1; i < lado; i++){
//     if(i < (lado - 1)){
//         oco += "  "
//     }
    
// }
// oco += "@"
