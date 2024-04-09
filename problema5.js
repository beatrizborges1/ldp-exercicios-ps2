// Signo 

const receber = require('prompt-sync')({ sigint: true })
let dia = receber('Digite o dia do seu nascimento: ')
dia = parseInt(dia)
let mes = receber('Digite o mes do seu nascimento: ')
mes = parseInt(mes)
let signo

switch (mes) {
  case 1:
    signo = dia <= 20 ? 'capricornio' : 'aquario'
    console.log(`Seu signo é ${signo}.`)
    break
  case 2:
    signo = dia <= 19 ? 'aquario' : 'peixes'
    console.log(`Seu signo é ${signo}.`)
    break
  case 3:
    signo = dia <= 20 ? 'peixes' : 'aries'
    console.log(`Seu signo é ${signo}.`)
    break
  case 4:
    signo = dia <= 19 ? 'aries' : 'touro'
    console.log(`Seu signo é ${signo}.`)
    break
  case 5:
    signo = dia <= 20 ? 'touro' : 'gemeos'
    console.log(`Seu signo é ${signo}.`)
    break
  case 6:
    signo = dia <= 20 ? 'gemeos' : 'cancer'
    console.log(`Seu signo é ${signo}.`)
    break
  case 7:
    signo = dia <= 22 ? 'cancer' : 'leao'
    console.log(`Seu signo é ${signo}.`)
    break
  case 8:
    signo = dia <= 22 ? 'leao' : 'virgem'
    console.log(`Seu signo é ${signo}.`)
    break
  case 9:
    signo = dia <= 22 ? 'virgem' : 'libra'
    console.log(`Seu signo é ${signo}.`)
    break
  case 10:
    signo = dia <= 22 ? 'libra' : 'escorpiao'
    console.log(`Seu signo é ${signo}.`)
    break
  case 11:
    signo = dia <= 21 ? 'escorpiao' : 'sagitario'
    console.log(`Seu signo é ${signo}.`)
    break
  case 12:
    signo = dia <= 21 ? 'sargitario' : 'capricornio'
    console.log(`Seu signo é ${signo}.`)
    break
}