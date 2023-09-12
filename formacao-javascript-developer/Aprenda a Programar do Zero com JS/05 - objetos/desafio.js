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
        return Math.round((totalKM / this.kmPorLitro) * precoCombustivel, -2);
    }
}

const gol = new Car('VW', 'Branco', 16.9);
console.log(gol.totalCombustivel(872, 4.89));
console.log(gol);

const x6 = new Car('BMW', 'Vermelha', 4.78);
console.log(x6.totalCombustivel(872, 4.89));
console.log(x6);


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

    calcularImc() {
        return Math.round(this.peso / (this.altura ** 2), -2);

    }

    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return `${this.nome} está a Baixo peso`
        } else if(imc >= 18.5 && imc < 25){
            return `${this.nome} está no Peso Normal`
        } else if(imc >= 25 && imc < 30){
            return `${this.nome} está com Sobrepeso`
        } else if(imc >= 30 && imc < 35){
            return `${this.nome} está com Obesidade grau I`
        } else if(imc >= 35 && imc < 40){
            return `${this.nome} está com Obesidade grau II`
        } else if(imc > 40){
            return `${this.nome} está com Obesidade grau III`
        }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose.calcularImc());
console.log(jose.classificarImc());

const andrei = new Pessoa('Andrei', 111, 1.79);
console.log(andrei.calcularImc());
console.log(andrei.classificarImc());