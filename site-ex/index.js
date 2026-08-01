const numeros = [10, 20, 20]
const total = numeros.filter(numero => {
    return numero
}).reduce((item, index) =>{
    return index + item
})
console.log(total)