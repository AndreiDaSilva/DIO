//First Class Functions

//Higher Order Functions


function falarMeuNome(){
    console.log('Meu nome é Andrei')
}

const ref = falarMeuNome

ref()

function falarMeuSobrenome(falarMeuNome){
    falarMeuNome()
    console.log(`Robson da Silva`)
}

falarMeuSobrenome(falarMeuNome);

function nomeDaFuncao() {
    console.log('nomeDaFuncao')
    // ela sofre o host
}

const nomeDeOutraFuncao = function(){
    console.log('nomeDeOutraFuncao')
    // só pode se evocada depois de criada
}

/** */

function funcao() {   
    console.log(this)
}

const funcao2 = () => {
    console.log(this)
}


const pessoa1 = {
    nome: 'Andrei',
    funcao,
    funcao2
}

pessoa1.funcao()
pessoa1.funcao2()

function soma(x) {
    return function(y){
        return x + y;
    }
}

const somaParcial = soma(10)

console.log(somaParcial(10))
console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))
console.log(somaParcial(50))

/** */

const pessoa = {
    nome: 'Andrei',
    idade: 25
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa, ['Olaaaa'])
gritar.call(pessoa,'Olaaaa')

/** */

function adicao(x, y) {
    return x + y
}

function multiplicacao(x, y) {
    return x * y
}

function divicao(x, y) {
    return x / y
}

function subtracao(x, y) {
    return x - y
}

function calcular(x, operacao, y) {
    console.log(operacao(x,y))
}

calcular(10, adicao, 20)
calcular(10, subtracao, 20)
calcular(10, divicao, 20)
calcular(10, multiplicacao, 20)
