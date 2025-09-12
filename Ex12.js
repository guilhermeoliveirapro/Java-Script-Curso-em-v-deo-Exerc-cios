var agora = new Date()
var hora = agora.getHours() //hora atual da máquina ou servidor executando
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <12 && hora > 5) {
    console.log('Bom dia!')
} else if (hora >= 13 && hora < 18) {
    console.log('Boa tarde!')
} else if (hora > 17 && hora >= 18) {
    console.log('Boa noite')
} else if (hora >= 0 ) {
    console.log('Boa madrugada')
}
