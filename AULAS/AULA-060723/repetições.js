// Estruturas de repetições

// //incrementa o valor de número em uma unidade
// console.log("------------------------------")
// for (let numero = 0; numero < 10; numero++) {
//     console.log(numero);
// }

// console.log("------------------------------")
// //incrementa o valor de número em duas unidades
// for (let numero = 0; numero < 10; numero+=2) {
//     console.log(numero);
// }

// //decramenta de 1 em 1, contagem regrassiva
// console.log("------------------------------")
// for (let numero = 10; numero >= 0; numero--) {
//     console.log(numero);
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log("------------------------------")
// for (let numero = 0; numero < 100;) {
//     numero++
//     console.log(numero);
// }


// let n = 0;

// while(n<17){
//     console.log("SoulCode + Porto");
//     n++;
// }

// for -> Uma quantidade de repetições determinadas
// while -> Uma quantidade de repetições indeterminadas

let num = 1873;
let ePrimo = 1;

for (let i = 2; i < num; i++) {
    if(num%i == 0){
        ePrimo=0
    }
}

if(ePrimo){
    console.log(`O número ${num} é primo.`)
}else{
    console.log(`O número ${num} não é primo.`)
}