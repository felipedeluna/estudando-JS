// Operadores Aritméticos -> +, -, *, /, **, %

// let result;

// result = 4 + 5; // 9
// console.log(result);

// result = 9 * 3; // 27
// console.log(result);

// result = ((3 + 7) * 12) / 6; // 20
// console.log(result);

// Operadores de Atribuição (=, +=, -=, *=, /=, **=, %=)
// result = result + 30;
// result += 30;
// console.log(result); // 50

// result -= 45;
// console.log(result); // 5

// result *= 7;
// console.log(result); // 35

// result %= 9;
// console.log(result); // 8

// result /= 2;
// console.log(result); // 4

// result **= 2;
// console.log(result); // 16


// Operadores de incremento e decremento


// a++ -> Pós Incremento
// --a -> Pré Decremento
// ++a -> Pré Incremento
// a-- -> Pós Decremento


// let a = 0;
// console.log(a); //0

// console.log(a++); // a + 1

// console.log(++a); // (1 + 1) + a

// console.log(--a); // (2 - 1) + a

// console.log(a--); //a + (1 - 1)

// console.log(a); //a

// Operadores Relacionais


// <   Menor que
// >   Maior que
// <=  Menor ou igual
// >=  Maior ou igual
// ==  Igual a
// === Igual a e mesmo tipo
// !=  Diferente


// const n1 = 9;
// const n2 = 11;
// const n3 = 9;
// const n4 = 13;
// const n5 = "11";

// let result = n1 < n2;
// console.log(result); // true

// result = n1 > n2;
// console.log(result); // false

// result = n1 <= n2;
// console.log(result); //true

// result = n1 < n3;
// console.log(result); //false

// result = n1 <= n3;
// console.log(result); //true

// result = n1 >= n3;
// console.log(result); //true

// result = n1 > n3;
// console.log(result); //false

// result = n3 == n4;
// console.log(result); //false

// result = n1 == n3;
// console.log(result); //true

// result = n1 != n3;
// console.log(result); //false


// result = n1 != n4;
// console.log(result); //true


// result = n2 == n5;
// console.log(result); //true

// result = n2 === n5;
// console.log(result); //false

// result = "Gabriel" == "Gabriel"
// console.log(result); //true

// result = "Gabriel Braga" == "Gabriel Jesus"
// console.log(result); //false

// result = 3.14 == 3;
// console.log(result); //false


// Operadores Lógicos

// && -> E
// || -> OU
// !  -> NÃO

// console.log(true); //true
// console.log(false); //false

// console.log("| E |");
// console.log(true && true); //true
// console.log(true && false); //false
// console.log(true && true && true && true && false); //false
// console.log(false && true); //false
// console.log(false && false); //false

// console.log("| OU |");
// console.log(true || true); //true
// console.log(true || false); //true
// console.log(true || true || true || true || false); //true
// console.log(false || true); //true
// console.log(false || false); //false

// console.log("| Negação |");
// console.log(!true); //false
// console.log(!false); //true
// console.log(!true || false);

// console.log("| Precedencia |")
// console.log(true || true && false);
// console.log((true || true) && false);

// console.log("| Mais Exemplos |")
// dada a idade, a pessoa é obrigada a votar
// let idade = 66;
// let calculo = (idade >= 18) && (idade <= 65);
// console.log(calculo);

// Operador Ternário
// Condição ? caso for verdadeiro : caso for falso
let mensagem;
let nota1 = 6.5;
let nota2 = 7;
let condicao = (nota1 + nota2) / 2 >= 7;
mensagem = condicao ? "Aprovado": "Reprovado" ; //condição
console.log(mensagem);

// Artméticos > Relacionais > Lógicos
