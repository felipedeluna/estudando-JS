// Vetores - Arrays
let nota = 6.5; //variaveis simples
let notas = [nota, 7.8, 9.0]; //variáveis compostas
let times = ["Corinthians", "Flamengo", "Fluminence"];
let ativados = [true, false, false, true];
let daniel = ["Daniel", 23, "Ensino Médio", true]; // uma má pratica acrescentar mais de um tipo de informação em uma array

// console.log(typeof nota); //Number
// console.log(typeof notas); //Object
// console.log(notas.length); //Número de elementos que compõem o objeto

let pesos = [89.5, 60.0, 45.4, 67.5, 75.3];

// console.log(pesos.length);
// console.log(pesos[2]); //indice -> numero que representa a posicao do elemento começando por 0
// console.log(pesos[0] + pesos[1]);
// console.log(pesos);

// for(let i = 0; i < pesos.length; i++){ // imprimir com for
//     console.log(pesos[i]); // iterar sobre o vetor
// }

let operacoes = [ //vetor de funções
    (n1, n2) => n1 + n2,
    (n1, n2) => n1 - n2,
    (n1, n2) => n1 * n2,
    (n1, n2) => n1 / n2,
]

// console.log(operacoes[0](3, 4)); //totalmente válido
// console.log(pesos);
// pesos[2] = 54.4;
// console.log(pesos)

// for(let i = 0; i < pesos.length; i++){
//     console.log(operacoes[2](pesos[i], 2)) //imprime multiplicando por 2, mas não modifica o elemento
//     pesos[i] *=2; // Modifica o elemento multiplicando por 2
// }
// console.log(pesos); //after

// let acumulador = 0;
// for(let i = 0; i < pesos.length; i++){
//     acumulador += pesos[i];
// }
// console.log(acumulador)
// quando os valores do vetor
for(let peso of pesos){ // for each -> iterar sobre os vetores
    console.log(peso)
}

// quando os indices do vetor
// for(let index in pesos){ // for each -> iterar sobre os vetores
//     console.log(index)
//     console.log(pesos[index])
// }