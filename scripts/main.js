let resultDadoInput
let num1
let verifica100 = false
let verificaSobeDesce = false
let multiplicador = document.getElementById(`multiplicador`)

function xamaAleatorio(verifica100, num1, resultDadoInput, multiplicador){
    let resultDado = document.getElementById(`${resultDadoInput}`)
    let multiNumber = parseInt(multiplicador.value)
    let deucerto = false
    

    if(verifica100 == true){
        do {
            let result = Math.floor(Math.random() * num1 + 1)
            if(result % 10 == 0){
                resultDado.value = result
                deucerto = true
            } 
    
        } while(deucerto == false)
    } else {
        let result = Math.floor(Math.random() * num1 + 1)
        resultDado.value = result
    }
    
    


    // for(let i = 0; i < multiNumber; i++){
    //     console.log(result)
    //     resultDadoSomadoP = resultDadoSomadoP + result
    // }
    
    // resultDado.value = 
    
}



function sobeDesce(multiplicador, verificaSobeDesce){
    let multiNumber = parseInt(multiplicador.value)

    if(verificaSobeDesce == true){
        multiNumber++
        multiplicador.value = multiNumber
    } else {
        multiNumber--
        multiplicador.value = multiNumber
    }

}
