const { gets, print } = require('./funcao')

const qtdNumeros = gets();
let isMaior = null;
let isMenor = null;
for (let i = 0; i < qtdNumeros; i++) {
    const numeros = gets()
    if (isMaior === null || isMaior < numeros) {
        isMaior = numeros;
    }
    if (isMenor === null || isMenor > numeros) {
        isMenor = numeros;
    }
}

print(isMaior);
print(isMenor);