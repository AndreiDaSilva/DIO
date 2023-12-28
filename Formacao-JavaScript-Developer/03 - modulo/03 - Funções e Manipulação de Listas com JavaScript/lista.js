

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

lista.forEach((value, i) => {
    console.log(value, i)
})

const listaPares = lista.filter((element) => {
    return (element % 2 === 0)
})

console.log(listaPares)


const somaTudo = lista.reduce((previous, current) => {
    return previous + current
}, 0)



console.log(somaTudo)

const listaDois = [1, 2, 3]

console.log(listaDois.join('/'))

const nomes = [{ nome: 'Andrei' }, { nome: 'Tanaeli' }, { nome: 'Luiza' }, { nome: 'Anderson' }]

console.log(nomes.map((e) => e.nome).join('; '))

console.log(nomes.map((e) => e.nome)
    .filter((e) => e.startsWith('A'))
    .join('; '))

const elementHtml = nomes
    .filter((e) => e.nome.startsWith('A'))
    .map(e => `<li>${e.nome}</li>`)
    .join('')

console.log(elementHtml)


class Pessoa {
    constructor(name) {
        this.name = name;
    }
}

const pessoas = [new Pessoa('Andrei'), new Pessoa('Taneli'), new Pessoa('Luiza'), new Pessoa('Rafael'), new Pessoa('Gabriel'), new Pessoa('Tania')]


const listaNomes = pessoas.map((element) => {
    return `
            <li>${element.name} </li>
           `
})

console.log(listaNomes)



