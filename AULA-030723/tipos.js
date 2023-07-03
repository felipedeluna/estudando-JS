// Tipagem Estatica -> Definição de um tipo a cada variavel (Java, C, C++, TypeScript)
// Tipagem Dinamica -> O tipo da variavel é definido de acordo com seu valor (JavaScript, Python)

// typeof -> Operador que retorna o tipo da variavel

let variavel;

variavel = 22;
console.log(typeof variavel); //Número

variavel = "Prof. Gabriel";
console.log(typeof variavel); //String

variavel = true;
console.log(typeof variavel); //Bolleano

variavel =  { nome: "Gabriel", idade: 21 }; ;
console.log(typeof variavel); // Objeto

variavel = [1, 2, 3, 4, 5];
console.log(typeof variavel); //Objeto

variavel = function(){ return 1 };
console.log(typeof variavel); //Função

variavel = undefined; 
console.log(typeof variavel); //indefinido

variavel = null; //Nulo
console.log(variavel)

variavel = 0/0; //Not a Number (numero)
console.log(variavel);