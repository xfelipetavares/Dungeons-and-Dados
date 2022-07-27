function xamaAleatorio(verifica100, num1, resultDadoInput, multi, resultDadoSomado) {
    let resultDado = document.getElementById(`${resultDadoInput}`)
    let multiNumber = parseInt(document.getElementById(multi).value)
    let resultDadoSomado2 = parseFloat(document.getElementById(`${resultDadoSomado}`).value)

    multiplicador(multiNumber, resultDado, verifica100, num1, resultDadoSomado2)
}


function multiplicador(value, result, verifica100, num1, resultDadoSomado2) {
    var random = 0
    for (let i = 0; i < value; i++) {
        random += randomNumber(verifica100, num1)
    }

    if (resultDadoSomado2 >= 1) {
        result.value = random + resultDadoSomado2
    } else {
        result.value = random
    }

}


function randomNumber(verifica100, num1) {
    let deucerto = false
    let resultReturn = 0
    if (verifica100 == true) {
        do {
            let result = Math.floor(Math.random() * num1 + 1)
            if (result % 10 == 0) {
                resultReturn = result
                deucerto = true
            }

        } while (deucerto == false)
    } else {
        let result = Math.floor(Math.random() * num1 + 1)
        resultReturn = result
    }
    console.log(resultReturn)
    return resultReturn
}


function sobeDesce(multiplicador, verificaSobeDesce) {
    let multi = document.getElementById(`${multiplicador}`)
    let multiNumber = parseInt(multi.value)
    if (verificaSobeDesce == true) {
        multiNumber++
        multi.value = multiNumber
    } else {
        multiNumber--
        multi.value = multiNumber
    }

}


function cleaner(resultado, multiplicador2, resultDadoSomado) {
    document.getElementById(`${resultado}`).value = ""
    document.getElementById(`${multiplicador2}`).value = "1"
    document.getElementById(`${resultDadoSomado}`).value = ""
}

