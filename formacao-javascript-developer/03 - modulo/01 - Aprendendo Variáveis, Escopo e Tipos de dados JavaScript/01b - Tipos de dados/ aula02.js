/*Primitivos

    boolean
    null
    undefined
    number
    string
    synbol
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






