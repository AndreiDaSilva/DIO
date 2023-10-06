/*Primitivos

    boolean
    null
    undefined
    number
    string
    Symbol
*/

//Object

let x = 10;
x = 20 //troca a referencia de memoria

let y = {numero: 10};
y.numero = 20; //troca o valor da variavel

//Wrappers

true // primitivos

new Boolean(true); // object

//boolean

console.log(10 == '10') //true
console.log(10 === '10') //false
console.log(10 != '10') //false
console.log(10 !== '10') //true
console.log(!!'') //false

//null - representa ausência de valor 
let n = null;

//undefined - como se a variável não existem
let u = {nome: null};

console.log(u.nome); //null
console.log(u.idade); //undefined

//numbers

// +Infinity -Infinity e NaN
// Double Precision 64-bit binary format IEEE 754

let number = 10; //inteiros
number = 10.10; //double

//string

let text01 = "text"; //representação html - '<div id="10">Teste</div>'
let text02 = '<div id="10">Teste</div>';
let text03 = `<div id=${id}>Teste</div>`; // para concatenar ${variável} - `<div id=${id}>Teste</div>`

//Symbol - um objeto imutável único

const z = Symbol('10');
const p = Symbol('10');

console.log(x === y); //false

//object - coleção dinâmica de chave e valores

const t = {
    nome: 'Renan',
    idade: 10
}; //objeto literal

x.sobrenome = 'Silva'

t.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
}

x['nome'] = 'Jose'