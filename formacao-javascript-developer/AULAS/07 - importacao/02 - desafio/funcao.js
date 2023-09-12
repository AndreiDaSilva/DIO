const entradas = [4, 100, 150, 90, 200];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(text) {
    console.log(text);
}

module.exports = { gets, print };