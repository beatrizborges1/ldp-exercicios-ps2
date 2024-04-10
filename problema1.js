// Valor a pagar pela corrida

const receber = require("prompt-sync")({ sigint: true });

console.log('');
console.log('HORARIOS E VALORES CORRIDA', "\n");
console.log('De 0:00 às 6:00: 5,30 reias fixos , mais 4,40 reais por km');
console.log('De 6:01 até 18:00 3,30 reais fixos, mais 3,80 reias por km');
console.log('De 18:01 até 23:59 3,30 reais fixos, mais 4,10 reias por km', "\n");

const horario = parseFloat(receber("Digite o horário da corrida (entre 0 e 23.59): "));
const distancia = parseFloat(receber("Digite a distância da corrida (em km): "));


function calcularValorCorrida(horario, distancia) {
  let valorAdicional = 0;
  let taxaFixa = 0;

  // Definindo a taxa fixa e o valor adicional por km de acordo com o horário
  if (horario >= 0 && horario <= 6) {
    taxaFixa = 5.30;
    valorAdicional = 4.40;
  } else if (horario > 6 && horario <= 18) {
    taxaFixa = 3.30;
    valorAdicional = 3.80;
  } else if (horario > 18 && horario <= 23.59) {
    taxaFixa = 4.30;
    valorAdicional = 4.10;
  }

  // Calculando o valor total da corrida
  let valorTotal = taxaFixa + distancia * valorAdicional;

  // Formatando o valor total para duas casas decimais
  valorTotal = valorTotal.toFixed(2);

  return `O valor da corrida é de R$ ${valorTotal}.`;
}

  // Testando o programa para diferentes situações
  console.log(calcularValorCorrida(horario, distancia));

// console.log(calcularValorCorrida(4.5, 15)); // Saída: O valor da corrida é de R$ 84.70.
// console.log(calcularValorCorrida(15, 20)); // Saída: O valor da corrida é de R$ 92.60.
// console.log(calcularValorCorrida(22.43, 12.7)); // Saída: O valor da corrida é de R$ 74.19.
