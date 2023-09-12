const entradas = [10, 5, 50, 10, 98, 23, 150, 178, 5, 98, 875];
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