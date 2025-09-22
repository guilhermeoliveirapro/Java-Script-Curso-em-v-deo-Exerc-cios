//Um modelo de contagem básica que pede inicio fim e passo

//Criar a function contar() e puxar o id dos dados para adicionar as variáveis

function contar(){

    let ini = document.querySelector('#txtini')
    let fim = document.querySelector('#txtfim')
    let passo = document.querySelector('#txtpas')
    let res = document.querySelector('#res')

    //Criar a mensagem de erro caso sejam digitados valores nulos

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] dados nulos')
        res.innerHTML = 'Impossível contar'
    } else {
    res.innerHTML = `Contando: <br>`

    //Transformar os valores em Number
    
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    
    if (passo <= 0){
        alert('Passo Inválido, considerando passo 1')
        p = 1
    }
    //Fazer a repetição de contagem com for (lembrar do += no innerHTML para exibir todos números da contagem)
    if(i<f){
        for (let c = i; c <= f; c += p){
        res.innerHTML += ` ${c}  \u{1F449}`
        }
    } else {
        for(let c = i; c>= f; c-= p) {
            res.innerHTML += ` ${c}  \u{1F449}`
        }
        
    }   
    res.innerHTML += `\u{1F3C1}`
    }
}
























