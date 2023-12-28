const { gets, print } = require('./funcao');

const qtdNumeros = gets();
let isParMaior = null;
let isImparMenor = null;

for (let i = 0; i < qtdNumeros; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (isParMaior === null || numero > isParMaior) {
            isParMaior = numero;
        }
    } else {
        if (isImparMenor === null || isImparMenor > numero) {
            isImparMenor = numero;
        }
    }
}

print('Maior número par: ' + isParMaior);
print('Menor número impar: ' + isImparMenor);


