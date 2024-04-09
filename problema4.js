// Luz do semáforo

const receber = require("prompt-sync")({ sigint: true });
let corluz;
corluz = receber("Digite a cor da luz atual: ");
corluz = corluz.toLowerCase();

switch (corluz) {
  case "verde":
    console.log("Siga");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "vermelho":
    console.log("Pare!");
    break;
  default:
    console.log("Digite uma cor válida, por favor.");
    break;
}


