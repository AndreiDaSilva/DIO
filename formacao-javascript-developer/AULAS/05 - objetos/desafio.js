/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Car {
    marca;
    cor;
    kmPorLitro;

    constructor(marca, cor, kmPorLitro) {
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
        this.marca = marca;
    }

    totalCombustivel(totalKM, precoCombustivel) {
        const valorTotal = Math.floor((totalKM / this.kmPorLitro) * precoCombustivel);
        console.log(`o carro da marca ${this.marca} e cor ${this.cor} precisara de R$${valorTotal} para essa viagem`)
    }
}

const gol = new Car('VW', 'Branco', 16.9);

gol.totalCombustivel(872, 4.89);
console.log(gol);



/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;   
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc() {
        const imc = Math.floor(this.peso / (this.altura**2));
        console.log(`${this.nome} tem o IMC igual a ${imc}`)
    }
}

const jose = new Pessoa('Jose', 70, 1.75);


jose.imc();

console.log(jose);

const andrei = new Pessoa('Andrei', 111, 1.79);


andrei.imc();

console.log(andrei);