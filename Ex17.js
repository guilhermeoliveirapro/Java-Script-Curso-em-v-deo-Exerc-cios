//Um modelo de tabuada simples que coleta o valor digitado pelo usuário e faz as respectivas multiplicações


//criar a function da tabuada
function tabuada(){
    
    //criar as variáveis que vão coletar os valores digitados
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')
    
    if(num.value.length == 0){ 
        alert('Por favor, digite um número.') //caso o valor seja nulo
    } else {
        let n = Number(num.value) //transformo em number
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }


}
