const {gets, print} = require('./funcao')

const qtdNumeros = gets();
const numeros = []
for (let i = 0; i < qtdNumeros; i++) {
    numeros.push(gets());  
}

let isMaior = 0;
let isMenor = numeros[qtdNumeros - 1];

for (let i = 0; i < numeros.length; i++) {
    isMaior = numeros[i] > isMaior ? numeros[i] : isMaior;
    isMenor = numeros[i] < isMenor ? numeros[i] : isMenor;
}

print(isMaior);
print(isMenor);