const pessoa = {
    genero: 'Masculino'
}

const andrei = {
    nome: 'Andrei',
    idade: 25,
    __proto__: pessoa 
}

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
}

const pessoas = new Pessoa('Andrei', 30)

console.log(andrei.genero)
console.log(andrei)
console.log(pessoas)
pessoas.falar()


class Pessoas{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade
    }

    falar(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const pessoas2 = new Pessoas('andrei', 25)

console.log(pessoas2.falar())
