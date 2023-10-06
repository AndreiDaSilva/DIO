/*1) Crie um programa que dado um número imprima a sua tabuada.*/

const numero = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${numero < 10 ? `0${numero}` : numero} x ${i < 10 ? `0${i}` : i} = ${numero * i < 10 ? `0${numero * i}` : numero * i }`)
}

/*2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado. */

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12];

const isPar = [];

for (let i = 0; i < numeros.length; i++) {
    numeros[i] % 2 == 0 ? isPar.push(numeros[i]) : ''; 
}

console.log(isPar);

/*3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V". */

const nomes = ['Andrei', 'Vanessa', 'Felipe', 'Tanaeli', 'Vitor'];

const isNomeV = [];

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i].charAt(0) === 'V') {
        isNomeV.push(nomes[i]);
    }
}
console.log(isNomeV);

/*4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;*/
const inicio = 10;
const final = 50;
const isPars = []
for (let i = inicio; i <= final; i++) {
    i % 2 === 0 ? isPars.push(i) : '';
}

console.log(isPars);

/*5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4] */

const medias = [2, 7, 3, 8, 10, 4];
const naoPassou = [];

for (let i = 0; i < medias.length; i++) {  
    medias[i] < 5 ? naoPassou.push(medias[i]) : '';
}

console.log(naoPassou);


/*6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]*/

const notas = [2, 7, 3, 8, 10, 4];
let maior = 0;

for (let i = 0; i < notas.length; i++) {
    maior = notas[i] > maior ? notas[i] : maior;
}

console.log(maior);

