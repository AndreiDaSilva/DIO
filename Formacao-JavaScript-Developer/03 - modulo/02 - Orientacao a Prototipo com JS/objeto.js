const pessoas = {
    genero: 'masculino'
}

const pessoa = {
    none: 'andrei',
    idade: 25,
    __proto__: pessoas
}



console.log(pessoa)
console.log(pessoa.genero)

//--------------------------------------------//

const pessoas2 = {
    genero: 'masculino'
}

const pessoa2 = Object.create(pessoas2)

pessoa2.nome = 'Andrei'
pessoa2.idade = 25

console.log(pessoa2)
console.log(pessoa2.genero)