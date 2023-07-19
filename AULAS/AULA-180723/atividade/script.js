const alunos = [
    { nome: "Matheus", idade: 23, nota: 10.0 },
    { nome: "Gabriel", idade: 21, nota: 10.0 },
    { nome: "Beatriz", idade: 23, nota: 10.0 },
    { nome: "Ana", idade: 42, nota: 10.0 },
    { nome: "José", idade: 43, nota: 10.0 },
    { nome: "Ana", idade: 42, nota: 10.0 },
    { nome: "José", idade: 43, nota: 10.0 },
    { nome: "Maria", idade: 35, nota: 9.5 },
    { nome: "Pedro", idade: 39, nota: 8.7 },
    { nome: "João", idade: 31, nota: 7.8 },
    { nome: "Laura", idade: 28, nota: 9.0 },
    { nome: "Fernando", idade: 48, nota: 8.2 },
    { nome: "Carolina", idade: 27, nota: 9.7 },
    { nome: "Miguel", idade: 25, nota: 9.8 },
    { nome: "Isabela", idade: 30, nota: 9.3 },
    { nome: "Ricardo", idade: 36, nota: 7.5 },
    { nome: "Eduarda", idade: 26, nota: 8.9 },
    { nome: "Luiz", idade: 33, nota: 9.2 },
    { nome: "Camila", idade: 29, nota: 8.6 },
    { nome: "Fábio", idade: 41, nota: 7.2 },
    { nome: "Gisele", idade: 34, nota: 9.4 },
    { nome: "Hugo", idade: 32, nota: 8.4 },
    { nome: "Marina", idade: 37, nota: 9.1 },
    { nome: "Rodrigo", idade: 38, nota: 8.8 },
    { nome: "Larissa", idade: 24, nota: 9.6 }
]

function inicializaTabela(){
    const tabela = document.querySelector("#tabela-alunos")
    tabela.innerHTML += `
        <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Nota</th>
        </tr>
    `
    for(let aluno of alunos){
        tabela.innerHTML += `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.idade}</td>
                <td>${aluno.nota}</td>
            </tr>
        `
    }
};
inicializaTabela();