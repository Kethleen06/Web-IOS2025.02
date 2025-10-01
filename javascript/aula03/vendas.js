let doce = "pudim"
 // colocamos em aspas quando é uma string, string = texto, F8 para executar na saída do js, go live só no html
let usuario = "Davi"
let valor_do_doce = 10

console.log (doce);
console.log (usuario);
console.log (" Promoção imperdível! Compre 3 bolos e pague apenas 2! ")
console.log (doce + usuario);
console.log ("Bem Vindo, " + usuario + "! Compre 3 " + doce + " e pague apenas 2");
  // Quando quero conectar duas frases/strings, posso usar o sinal de + dentro de um log

  // O ato de conectar ou colar dados se chama concatenação

console.log(usuario + ": Quero 3 " + doce + ", por favor!");
console.log("Claro! " + usuario + " o valor total do " + doce + " deu: " + (valor_do_doce *3).toFixed (2) );
