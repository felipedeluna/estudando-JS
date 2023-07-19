// Objeto -> Estrutura que representa um objeto do mundo real ( Ex. Produto, Pessoa, Profissão )
// Objeto pode ser modelado -> Classe

class Livro {
    titulo;
    paginas;
    autor;
    volume;
    isbn;
    alugar = function(){
        console.log(`Alugado!`)
    };

    static isLivro(livro){ // é uma função estática, ou seja, não será necessário instanciar o objeto para acessa-la
        let flag = livro.titulo == undefined;
        return !flag;
    }

    constructor(titulo, paginas, autor,volume, isbn){
        this.titulo = titulo;
        this.paginas = paginas;
        this.autor = autor;
        this.volume = volume;
        this.isbn = isbn;
    }
};

// Para criar a estrutura "fisica" do objeto pela classe é necessário fazer uma INSTÂNCIA
let arquiqueturaLimpa = new Livro(); // instância do objeto Livro
// console.log(typeof arquiqueturaLimpa);

arquiqueturaLimpa.titulo = "Arquitetura Limpa";
arquiqueturaLimpa.autor = "Tobert C. Martin";
arquiqueturaLimpa.paginas = 400;
arquiqueturaLimpa.isbn = "978-85-508-0460-6";

// console.log(arquiqueturaLimpa);
// arquiqueturaLimpa.alugar();

let diarioDeUmBanana = new Livro("Diário de um banana", 217, "Jeff Kinney", 1, "978-38-339-0730-2");
console.log(diarioDeUmBanana);

// console.log(Livro.isLivro())

// Objeto é uma estrutura que representa o objeto do mundo real no nosso código.
// Classe -> Planta ou Modelo do objeto.
// Construtor é a função que gere o objeto físico.
// Características -> Atributos/Propriedades, Métodos/Funções.

// JavaScript -> Front
// Java -> Back

const objeto = {}
console.log(objeto)