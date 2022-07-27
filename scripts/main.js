let resultDadoInput
let num1
let verifica100 = false
let verificaSobeDesce = false

function xamaAleatorio(verifica100, num1, resultDadoInput, multi){
    let resultDado = document.getElementById(`${resultDadoInput}`)
    let multiNumber = parseInt(document.getElementById(multi).value)

    multiplicador(multiNumber, resultDado, verifica100, num1)
}

function multiplicador(value, result, verifica100, num1){
    var random = 0
    for(let i = 0; i < value; i++){
        random += randomNumber(verifica100, num1)
    }
    result.value = random
}

function randomNumber(verifica100, num1){
    let deucerto = false
    let resultReturn = 0
    if(verifica100 == true){
        do {
            let result = Math.floor(Math.random() * num1 + 1)
            if(result % 10 == 0){
               resultReturn = result
                deucerto = true
            } 
    
        } while(deucerto == false)
    } else {
        let result = Math.floor(Math.random() * num1 + 1)
        resultReturn = result
    }
    console.log(resultReturn)
    return resultReturn
}

function sobeDesce(multiplicador, verificaSobeDesce){
    let multi = document.getElementById(`${multiplicador}`)
    let multiNumber = parseInt(multi.value)
    if(verificaSobeDesce == true){
        multiNumber++
        multi.value = multiNumber
    } else {
        multiNumber--
        multi.value = multiNumber
    }

}

// function cleaner(){

// }