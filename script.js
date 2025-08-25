// Cria um objeto com a data e hora atual
const agora = new Date();


// Salva a data e hora formatada em uma variável
const dataAtual = agora.toLocaleDateString("pt-BR");
const horaAtual = agora.toLocaleTimeString("pt-BR");

console.log("Data:", agora);
console.log("Hora:", horaAtual);


