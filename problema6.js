// Crie um problema
// Problema: Calculadora de IMC

const receber = require("prompt-sync")({ sigint: true });

const peso = parseFloat(receber("Digite seu peso (kg): "));
const altura = parseFloat(receber("Digite sua altura (m): "));

const calcularIMC = (peso, altura) => {
  const imc = peso / (altura * altura);

  switch (true) {
    case imc < 18.5:
      return `Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`;
    case imc >= 18.5 && imc < 25:
      return `Seu IMC é ${imc.toFixed(2)}. Você está com peso normal.`;
    case imc >= 25 && imc < 30:
      return `Seu IMC é ${imc.toFixed(2)}. Você está acima do peso.`;
    case imc >= 30:
      return `Seu IMC é ${imc.toFixed(2)}. Você está obeso.`;
  }
};

const resultado = calcularIMC(peso, altura);

console.log(resultado);
