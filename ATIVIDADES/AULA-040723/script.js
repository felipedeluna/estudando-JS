//Escreva um programa que verifique se um número é par ou ímpar.
let num_p_i = 36;
let operacao = num_p_i % 2 == 0;
let result_p_i = operacao ? "par" : "impar";

console.log("");
console.log(`O número ${num_p_i} é ${result_p_i}.`);
console.log("");

//Faça um programa que calcule a média aritmética de três números.
let num_m_1 = 2;
let num_m_2 = 5;
let num_m_3 = 8;
let result_m = (num_m_1 + num_m_2 + num_m_3) / 3;

console.log(`A média entre ${num_m_1} + ${num_m_2} + ${num_m_3} é igual a ${result_m.toLocaleString(1)}.`);
console.log("");

// Escreva um programa que determine se um número é divisível por 3 e por 5 ao mesmo tempo.
let num_div_3e5 = 15;
let div_3e5 = (num_div_3e5 % 3 == 0) && (num_div_3e5 % 5 == 0);
let result_div_3e5 = div_3e5 ? "é divisivel" : "não é divisível";

console.log(`O número ${num_div_3e5} ${result_div_3e5} por 3 e por 5 ao mesmo tempo.`);
console.log("");

// Faça um programa que calcule a área de um triângulo com base e altura.
let base_tri = 5;
let alt_tri = 4;
let area_tri = base_tri * alt_tri;

console.log(`A área do triângulo com base ${base_tri} e altura ${alt_tri} é igual a ${area_tri}.`);
console.log("");

// Escreva um programa que converta uma temperatura de graus Celsius para Fahrenheit.
let graus_cels = 18;
let convs_cels_fahr = (graus_cels * 1.8) + 32;

console.log(`${graus_cels}°C são ${convs_cels_fahr}°F.`)
console.log("");

// Faça um programa que calcule o delta das funções de segundo grau.
let a = 3;
let b = -7;
let c = 2;
let delta = b**2 + (-4*a*c);
let bask_pos = (-b + Math.sqrt(delta)) / (2*a);
let bask_neg = (-b - Math.sqrt(delta)) / (2*a);

console.log(`O resultado da equação ${a}x^2 + (${b}x) + (${c}) é igual a:`);
console.log(`Δ = ${delta}`)
console.log(`x1 = ${bask_pos.toLocaleString(1)}`);
console.log(`x2 = ${bask_neg.toLocaleString(1)}`);
console.log("");

// Faça um programa que retorna se uma determinada pessoa pode dirigir, baseado na sua idade (utilize operador ternário).
let idade = 17 ;
let maioridade = idade >= 18;
let pode_dirigir = maioridade ? "pode dirigir" : "não pode dirigir";

console.log(`Uma pessoa de ${idade} anos ${pode_dirigir}.`)
