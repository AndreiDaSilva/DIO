class Pessoa {
    nome;
    idade;
    altura;
    anoDeNascimento;

    constructor(nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} e minha altura é ${this.altura}, e nasci no ano de ${this.anoDeNascimento}`)    
    }
}


function compararPessoasIdade(p1, p2){
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }  else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

function compararPessoasAltura(p1, p2){
    if (p1.altura > p2.altura) {
        console.log(`${p1.nome} é mais alto(a) que ${p2.nome}`);
    } else if (p1.idade < p2.idade){
        console.log(`${p2.nome} é mais alto(a) que ${p1.nome}`);
    }  else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma altura`);
    }
}



const andrei = new Pessoa('Andrei', 25, 1.78);
const tana = new Pessoa('Tana', 24, 1.58);

compararPessoasIdade(andrei, tana);
compararPessoasAltura(andrei, tana);

andrei.descrever();
tana.descrever();