// Funções

// function somar(n1, n2 =10){
//     let soma = n1 + n2;
//     return (`A soma é ${soma}`);
// }

// let result = somar(30,17)
// console.log(result)

// function calc(n1, n2, op = "+") {
//     switch(op){
//         case "+":
//             return n1 + n2;
//         case "-":
//             return n1 - n2;
//         case "*":
//             return n1 * n2;
//         case "/":
//             return n1 / n2;
//     }
//     return NaN;
// }

// console.log(calc(2, 3, "*"));
// console.log(calc(18, 3, "/"));
// console.log(calc(2, 3, "somar"));

// Entrada
// Processamento
// Saída

function desenhaTriangulo(altura){
    for(let i = 0; i < altura; i++){
        let linha = "";
        for(let s = 0; s < (altura-i); s++ ){
            linha += "  "
        }
        for(let j = 0; j <= i; j++){
            linha += "   *"
        }
        console.log(linha)
    }
}
desenhaTriangulo(10)