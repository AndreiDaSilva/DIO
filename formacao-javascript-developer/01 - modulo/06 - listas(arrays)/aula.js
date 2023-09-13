
const alunos = ['Andrei', 'Vitor', 'Marina'];

console.log(alunos);

alunos.push('Tana');

console.log(alunos.pop());

console.log(alunos);

console.log(alunos.shift());

console.log(alunos);

for (let idx = 0; idx < alunos.length; idx++) {
    console.log(alunos[idx]); 
}


const notas = [];
let soma = 0;

notas.push(7);
notas.push(9);
notas.push(5);
notas.push(3);
notas.push(8);

for (let idx = 0; idx < notas.length; idx++) {
    soma += notas[idx];
}


console.log(soma / notas.length);