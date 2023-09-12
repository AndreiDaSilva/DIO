const {print, gets} = require('./funcao');

const qtdNumeros = gets();
const isPar = [];

for (let i = 0; i < qtdNumeros; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        isPar.push(numero);
    }
}

print(isPar)