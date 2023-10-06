const files = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'task.csv')


// file
// .then((arquivo) => arquivo.toString('utf-8'))
// .then((text) => text.split('\n').slice(1))
// .then((linha) => linha.map((linhas) => {
//     const [nome, feito] = linhas.split(";")
//     return {
//         nome, 
//         feito: feito === 'true'
//     }
// }))
// .then((listaTarefas) => console.log(listaTarefas)) 
// .catch((error) => {
//     console.log('Deu ruim', error)
// })
// .finally(() =>{
//     console.log('Finalizou!')
// })

async function buscarArquivo() {
    try {
        const file = await files.promises.readFile(filePath);
        const textFile = file.toString('utf-8')
        console.log(textFile)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Finalizou!')
    }

}

buscarArquivo();