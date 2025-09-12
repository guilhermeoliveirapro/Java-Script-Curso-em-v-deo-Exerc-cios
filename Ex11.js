var idade = 16
var mensagem = `você tem ${idade} anos, `
if (idade < 16) {
    mensagem += 'não vota'
} else if (idade < 18 || idade > 65) {
    mensagem += 'voto opcional'
} else {
    mensagem += 'voto obrigatório'
}
console.log(mensagem)
