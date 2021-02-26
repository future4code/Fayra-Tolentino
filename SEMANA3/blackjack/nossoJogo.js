/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// 1 - Imprime uma mensagem no console "Bem vindo ao jogo de Blackjack!";
// 2. Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?";
// 3 - Se o usuário responder `cancel`, imprime uma mensagem no console "O jogo acabou".
// 4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada.

let welcome = alert("Bem Vind@ ao jogo de Blackjack\n Façam suas apostas!");
let iniciar =  window.confirm("Quer iniciar uma nova rodada?");
if(welcome === undefined){
   iniciar;
}if( iniciar === false){
   alert("O jogo acabou :( !");
}else{
   console.log("talvez tenha dado certo!")
}


