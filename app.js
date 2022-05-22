// Anonymous Function
let anonymous =  function() {
    console.log('Função Anônima')
}

// Expression Function
function functionName() {
    console.log('Função com Nome atribuído')
}

// Arrow Function
const arrowFunction = () => {
    console.log('Arrow Function')
}

anonymous()
functionName()
arrowFunction()

// Parâmetros e Argumentos
function test(valorA, valorB) {
    let valorFinal = valorA + valorB
    console.log(valorFinal)
}

test(2, 1)