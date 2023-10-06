// function Pessoa(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
// }

// Pessoa.prototype.falar = function(){
//     console.log(`Meu nome é ${this.nome}`);
// }

// const newPessoa = new Pessoa('andrei', 25);

// const andrei = {
//     genero: 'masculino'
// }

// Pessoa.call(andrei, 'andrei', 30);

// newPessoa.falar();

// console.log(andrei)

String.prototype.toPlang = function(){
    return `P ${this}`
}

console.log('teste'.toPlang())

const renan = {
    none: 'Renan'
}

renan.__proto__ = {
    idade: 25
}

console.log(renan.idade)