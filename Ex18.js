/* 
    - Coletar números inseridos pelo usuário;
    - Verificar invalidez do valor inserido ( Maior que 100, menor que 0, já presente na lista, valor não inserido.);
    - Adicionar os números inseridos dentro de um array;
    - Apresentar na tela: Quantidade de valores inseridos, maior e menor, soma entre todos, média dos valores;
    - Só permitir apresentar na tela se houver números na lista
*/

const num = document.querySelector('input#fnum')
const lista = document.querySelector('select#flista')
const res = document.querySelector('div#res')
const valores = []

function isNumero(n) {  // Condição para caso o valor seja maior que 100 ou menor que 0
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

 function inLista(n, l) {  // Condição para caso o número já exista na lista
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
} 

function adicionar(){  // Função para adicionar o número a lista ou apresentar a mensagem de erro
    if (isNumero(num.value) && !inLista(num.value, valores)) {

        valores.push(Number(num.value)) // transformar os valores da lista em Number
        let item = document.createElement('option') // criar uma option dentro da lista que mostra os números inseridos
        item.text = `Valor ${num.value} adicionado` // texto dentro de item que mostra o valor dos números inseridos
        lista.appendChild(item) // coloca os valores de item dentro da lista
        res.innerHTML = '' // limpa quando um novo valor é inserido
    } else {
        alert('[ERRO] VALOR INVÁLIDO OU PRESENTE NA LISTA')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('[ERRO] ADICIONE VALORES ANTES DE FINALIZAR')
    } else {
        let total = valores.length
        let soma = 0
        let media = 0

        // Definição das variáveis de controle
        let maior = valores[0]
        let menor = valores[0]

        // Loop para percorrer todos os elementos do Array
        for(let pos in valores) {

            // Soma o valor 0 com os valores de todas as posições
            soma += valores[pos] 

            // Verifica se o valor atual é maior que o 'maior' registrado até agora.
            if (valores[pos] > maior)
                maior = valores[pos]

            // Verifica se o valor atual é menor que o 'menor' registrado até agora.
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} valores cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores inseridos é de ${media.toFixed(1)}</p>`
    }
}
