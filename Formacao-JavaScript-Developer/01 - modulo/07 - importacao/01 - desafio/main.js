const { gets, print } = require('./funcao');

const tabuada = gets();

for (let i = 1; i <= 10; i++) {
    print(`${tabuada < 10 ? `0${tabuada}` : tabuada} x ${i < 10 ? `0${i}` : i} = ${i * tabuada < 10 ? `0${i * tabuada}` : i * tabuada}`)
}
