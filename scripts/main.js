function somar(){
    let multiplicador = document.getElementById(`multiplicador`)

    let multiNumber = parseInt(multiplicador.value)
    console.log(typeof(multiNumber))
    multiNumber++
    multiplicador.value = multiNumber
}
function diminuir(){
    let multiplicador = document.getElementById(`multiplicador`)

    let multiNumber = parseInt(multiplicador.value)
    console.log(typeof(multiNumber))
    multiNumber--
    multiplicador.value = multiNumber
}


function xamad100(){
    let resultDado = document.getElementById(`resultDadoD100`)
    let deucerto = false
    
    //necessario para ele pular de 10 em 10
    do {
        let result = Math.floor(Math.random() * 100 + 1)
        if(result % 10 == 0){
            resultDado.value = result
            deucerto = true
        } 

    } while(deucerto == false)
}

function xamad20(){
    let result = Math.floor(Math.random() * 20 + 1)
    let resultDado = document.getElementById(`resultDadoD20`)

    resultDado.value = result
}

function xamad12(){
    let result = Math.floor(Math.random() * 12 + 1)
    let resultDado = document.getElementById(`resultDadoD12`)

    resultDado.value = result
}

function xamad10(){
    let result = Math.floor(Math.random() * 10 + 1)
    let resultDado = document.getElementById(`resultDadoD10`)

    resultDado.value = result
}

function xamad8(){
    let result = Math.floor(Math.random() * 8 + 1)
    let resultDado = document.getElementById(`resultDadoD8`)

    resultDado.value = result
}

function xamad6(){
    let result = Math.floor(Math.random() * 6 + 1)
    let resultDado = document.getElementById(`resultDadoD6`)

    resultDado.value = result
}

function xamad4(){
    let result = Math.floor(Math.random() * 4 + 1)
    let resultDado = document.getElementById(`resultDadoD4`)

    resultDado.value = result
}

function xamad3(){
    let result = Math.floor(Math.random() * 3 + 1)
    let resultDado = document.getElementById(`resultDadoD3`)

    resultDado.value = result
}

function xamad2(){
    let result = Math.floor(Math.random() * 2 + 1)
    let resultDado = document.getElementById(`resultDadoD2`)

    resultDado.value = result
}

function cleanerD100(){
    let resultDado = document.getElementById(`resultDadoD100`)
    resultDado.value = ``
}
function cleanerD20(){
    let resultDado = document.getElementById(`resultDadoD20`)
    resultDado.value = ``
}
function cleanerD12(){
    let resultDado = document.getElementById(`resultDadoD12`)
    resultDado.value = ``
}
function cleanerD10(){
    let resultDado = document.getElementById(`resultDadoD10`)
    resultDado.value = ``
}
function cleanerD8(){
    let resultDado = document.getElementById(`resultDadoD8`)
    resultDado.value = ``
}
function cleanerD6(){
    let resultDado = document.getElementById(`resultDadoD6`)
    resultDado.value = ``
}
function cleanerD4(){
    let resultDado = document.getElementById(`resultDadoD4`)
    resultDado.value = ``
}
function cleanerD3(){
    let resultDado = document.getElementById(`resultDadoD3`)
    resultDado.value = ``
}
function cleanerD2(){
    let resultDado = document.getElementById(`resultDadoD2`)
    resultDado.value = ``
}