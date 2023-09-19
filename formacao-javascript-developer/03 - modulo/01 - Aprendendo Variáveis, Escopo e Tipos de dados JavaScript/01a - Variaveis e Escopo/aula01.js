//Variaveis
var varNumero = 10;
var varTexto = '10';
console.log(varNumero + varTexto);
//1010
var varNumero = 10;
var varTexto = '10';
console.log(varNumero - varTexto);
//0
var varNumero = 10;
var varTexto = 'Texto';
console.log(varNumero + varTexto);
//10Texto
var varNumero = 10;
var varTexto = 'Texto';
console.log(varNumero - varTexto);
//NaN 



//Hoisting
var teste01 = function () {
    console.log('teste01')
}

function teste02() {
    console.log('teste01')
}

teste01();
teste02();
//teste03(); 
teste04();

//var teste03 = function () {
//    console.log('teste01')
//}

function teste04() {
    console.log('teste01')
}

//Escopos e Diferenças entre Var, Let Const
//VAR - vaza no escopo, exceto escopo de função 

function teste05() {
    var var1 = 10;
}

teste05();

console.log(var1) // error - var1 não declarado

if (true) {
    var var2 = 20
}

console.log(var2);


//let - não vaza escopo
if (true) {
    let var3 = 20
}

console.log(var3);

//const - funciona como let, não sofre alterações
if (true) {
    const var4 = 20
}

var4 = 30 //error

console.log(var4);
