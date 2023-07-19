class Pessoa{
    nome;
    idade;
    email;
}

let pessoa1 = new Pessoa();
pessoa1.nome = 'Gabriel'
pessoa1.idade = 21;
pessoa1.email = "gabrielbraga@example.com"

// console.log(pessoa1)

const pessoa2 = {
    nome: "Aline",
    idade: 24,
    email: "aline@example.com",
    foto: "https://bancodefotoos.com/6546465465",
    enabled: true
}

// console.log(pessoa2);

// console.log()

const vetor = ["Gabriel", 21, "gabielbraga@example.com"];
// console.log(vetor[0])
// console.log(pessoa1.nome)
// console.log(pessoa1["nome"]) //totalmente válido. Acessa a propriedade "Nome" do objeto

const pc = {
    ram: 16,
    disco: "1TB",
    processador: "i9 Intel",
    fonte: "1000W",
    placa_mae: "Gigabyte"
}

const saldo = 800;

if(saldo > 4000){
    pc.placa_de_video = "RTX 3080 TI";
}

// console.log(pc)

let n1 = 2;
let n2 = n1; // faz uma cópia de n1 e passa para n2
n1 = 3; // não afeta n2
console.log(n1);
console.log(n2);

// // Forma incorreta de copiar um objeto
// let objeto1 = {nome: "Bruna", curso: "JavaScript"};
// let objeto2 = objeto1; // não é feita uma cópia do objeto, e sim da referencia dele na memória
// objeto1.nome = "Bruna Muller";
// console.log(objeto1);
// console.log(objeto2);

// Forma correta de copiar um objeto -> Operador spread "..."
let objeto1 = {nome: "Bruna", curso: "JavaScript"};
let objeto2 = {...objeto1}; //  é feita uma cópia do objeto
objeto1.nome = "Bruna Muller";
console.log(objeto1);
console.log(objeto2);
delete objeto1.nome // Remove o atributo "nome" do objeto
console.log(objeto1);