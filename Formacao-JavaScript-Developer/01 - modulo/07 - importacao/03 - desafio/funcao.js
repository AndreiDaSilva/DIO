const entradas = [5, 1, 3, 9, 10, 12,];
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