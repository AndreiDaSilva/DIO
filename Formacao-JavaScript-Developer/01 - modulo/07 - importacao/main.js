/*
  Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100. Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.
  
  Dados de Entrada
  5
  50
  10
  98
  23
  
  Saída:
  98
 */
const {gets, print} = require('./funcoes-auxiliares');


let isMaior = 0;
let numeroAlunos = gets();
for (let i = 0; i < numeroAlunos; i++) {
    const numeroSorteado = gets();
    isMaior = numeroSorteado > isMaior ? numeroSorteado : isMaior;
}


print(isMaior);