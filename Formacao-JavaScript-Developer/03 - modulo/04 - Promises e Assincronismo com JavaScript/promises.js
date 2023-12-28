const ramdomNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = parseInt(Math.random() * 100)
    resolve(number)
    }, 5000)
})


ramdomNumber
.then((value) => {
    console.log(value)
    return value + 10
})
.then((value) => {
    console.log(value)
})
.catch((error) => {
    console.error(error)
})
.finally(() => {
    console.log('Finalizou!')
})