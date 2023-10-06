const { gets, print } = require('./funcao');

const valorSalarioBruto = gets();
const valorBeneficio = gets();


function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota(salarioBase) {
    if (salarioBase >= 0 && salarioBase <= 1100) {
        return 5;
    } else if (salarioBase > 1100 && salarioBase <= 2500) {
        return 10;
    } else {
        return 15;
    }
}




const aliquotas = pegarAliquota(valorSalarioBruto)

const valorImposto = calcularPorcentagem(valorSalarioBruto, aliquotas);

const salarioTranferir = valorSalarioBruto - valorImposto + valorBeneficio;

print(salarioTranferir);