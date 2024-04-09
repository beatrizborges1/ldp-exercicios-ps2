// Numero premiado

const num_pre = [29, 15, 43];
const receber = require("prompt-sync")({ sigint: true });

let tentativas = 1;
const t = 3;

// Loop para as tentativas do usuário
while (tentativas <= t) {
  let n;

  // Validação do número digitado
  while (true) {
    n = receber("Digite um número entre 1 e 100: ");
    n = parseFloat(n);

    if (!isNaN(n) && n >= 1 && n <= 100) {
      console.log("Você tem " + (t - tentativas) + " tentativas restantes", "\n");
      break;
    } else {
      console.log("Valor inválido. Digite um número entre 1 e 100.");
    }
  }

  // Verifica se o número digitado é premiado
  if (num_pre.includes(n)) {
    console.log(`Parabéns! Você acertou o número ${n}.`);
    break;
  } else {
    console.log(`O número ${n} não está entre os premiados.`);

    // Feedback sobre o palpite
    if (n < num_pre[0]) {
      console.log("O número sorteado é maior que o seu palpite.");
    } else {
      console.log("O número sorteado é menor que o seu palpite.");
    }

    tentativas++;
  }
}

// Mensagem final de tentativas
if (tentativas > t) {
  console.log("Você excedeu o número de tentativas.");
}
