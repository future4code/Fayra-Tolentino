// Ex 1 -> **Escreva uma função que reverte um texto.**

// Exemplo x = '32243'

// Saída esperada : '34223'

function stringReverse(){
    var text = prompt('Digite o textto que queira converter')
    var convert = text. split('').reverse().join('')
    alert(convert)
}

// Ex2 - **Escreva uma função javascript que checa se uma palavra é ou não um palindromo**
// Palindromo é uma palavra ou frase que tem exatamente as mesmas letras de trás para a frente, 
// como Arara ou subi no onibus

// function palindromeCheck(stringPal){
//     var caractSpecial = /[\W_]/g;
//     var uniformStr = stringPal.toLowerCase().replace(caractSpecial,'')
//     var reverStr = uniformStr.split('').reverse('').join('')
//     if(uniformStr === reverStr){
//     alert('A palavra é um palindromo')
//     } else{
//     alert('a palavra não é um palindromo')
//     }
// }

function palindromeUser(){
    var palindromeAsk = prompt('Digite a palavra que deseja verificar se é ou não palindromo');
    var caractSpecial = /[\W_]/g;
    var uniformizacao = palindromeAsk.toLowerCase().replace(caractSpecial,'')
    var reverseAsk = uniformizacao.split('').reverse('').join('')
    if (uniformizacao === reverseAsk){
        alert('A palavra é um palindromo')
    }else{
        alert('a palavra não é um palindromo')
        }
}

// Ex 3 -Escreva uma função javascript que escreva todas as combinacoes de uma string.**

// Exemplo string : 'pão'

// Saída esperada : p,pã,pão,ã,ão,o

function combinarString(){
    //receber a string que deseja  converter
    var stringUser = prompt('Escreva qual string deseja saber suas combinações')
    //criar um array para salvar as possibilidades
    var arrayString= []
    //varrer o array com for
    for(a=0;a<stringUser.length;a++){
    //criar um for para somar a letra posterior 
        for(p=a+1; p<stringUser.length+1;p++){
            arrayString.push(stringUser.slice(a, p))
        }
    } alert('As possíveis combinações são : ' + arrayString + ' .Ou seja,' + arrayString.length + ' combinações possíveis') 
}

// Exercício 4 - Escreva uma função javascript que retorna uma string com suas letras em ordem alfabetica.
// Exemplo string : 'joão'
// Saída esperada : 'ãjoo'

// Exercício 5 - Escreva uma função javascript que palavras com a letra inicial maiúscula
// Exemplo string : 'fala meu peixe'
// Saída esperada : 'Fala Meu Peixe '

    function letraMaiuscula (){
        const frase = prompt('Digite a frase que deseja por as letras iniciais em maiuscula')
        // Criar uma constante para converter primeiramente todas as letras da palavra em minusculo,padronizando o código 
        // para depois você poder com a expressão regular /(?:^|\s)\S/g identificar as primeiras letras de cada frase
        const conversao = frase.toLowerCase().replace(/(?:^|\s)\S/g, function(letraInicial){
        // fazer uma nova função que transforme os primeiros caracteres em letra maiuscula
            return letraInicial.toUpperCase()
        })
        return conversao;
    }

// Exercício 6 -Escreva uma função javascript que recebe uma string e imprime a maior palavra dessa string
// Exemplo string : 'O Astrodev é malvado'
// Saída esperada : 'Astrodev'

// Exercício 7
// Escreva uma função javascript que recebe uma string como parametro e conta o numero de vogais na string.
// Exemplo string : 'Exemplo'
// Saída esperada : 3

    function vogaisCont(){
        let palavra = prompt('Digite a palvra que deseja contar as vogais')
        let qntVogais = []

    }

// Exercício 8
// Escreva uma função javascript que recebe um array de números e retorna o segundo maior e o segundo menor, respectivamente
// Exemplo de array : [3, 2, 5, 1, 4]
// Saída esperada : 2,4

function ArrayOrder (){
        let arrayCont = [0,3,4,5,6,10,20,15,30]
        arrayCont.sort(function(a,b){
            if(a>b) return 1;
            if(a<b)return -1;
            return 0;
        })
        var ultimo = arrayCont[arrayCont.length - 1]
        var segundo = arrayCont[1]
        console.log('O segundo menor número é : ' + segundo + ' o maior número é '+ ultimo)
    }

// Exercício 9
// Escreva uma função javascript para extrair caracteres unicos de uma string
// Exemplo string : "thequickbrownfoxjumpsoverthelazydog"
// Saída esperada : "thequickbrownfxjmpsvlazydg

// Exercício 10
// Escreva uma função javascript para pegar o numero de vezes que cada letra aparece numa string.
// Exemplo string: "teste"
// Saida esperada: "2 t, 2e 1s"

// ***************************************************LAÇOS***************************************************

// Exercício 1 - Escreva um programa que receba um array de números e exiba o maior número.
// Exemplo: [1, 3, 9, 5 , 2, 7]
// Saída: 9

// Com o método sort ele organizaria o array da seguin te forma [1, 10, 2, 3, 4, 5, 6, 7, 9] pois ele tá considerando
// o primeiro termo da string para solucionar esse problema, além de ordenar você precisa comparar os números e colocá-los
// em ordem de queme é maior que quem 
    // function OrdemArray () {
    //     arrayCont = [1,4,2,7,9,3,5,6,10]
    //     arrayCont.sort()
    //     var ultimo = arrayCont[arrayCont.length - 1]
    //     console.log(ultimo)
    // }

    function ArrayOrder (){
        let arrayCont = [0,3,4,5,6,10,20,15,30]
        arrayCont.sort(function(a,b){
            if(a>b) return 1;
            if(a<b)return -1;
            return 0;
        })
        var ultimo = arrayCont[arrayCont.length - 1]
        console.log(ultimo)
    }

// Exercício 2 - Escreva um programa que receba um array de strings e exiba a string mais
// longa.
// Exemplo: ["Casa", "Elefante", "Espelho", "Internacional"]
// Saída: Internacional

// Exercício 3- Escreva um programa que receba três números e os ordene do menor para o maior.
// Exemplo: 3, 27, 12
// Saída: 3, 12, 27

// Exercício 4 - Altere o programa anterior para que ele também exiba com um alert o maior valor
// Exemplo: 3, 27, 12
// Saída: 3, 12, 27, com alerta imprimindo 27

// Exercício 5- Escreva um laço que itere de 0 a 30. Para cada iteração, cheque se o número é par, ou se é divisível por 3. 
// Imprima uma mensagem para cada vez que uma ou ambas condições forem atendidas.
// Saída: "2 é par", "3 é divisível por 3", "4 é par", "6 é par e divisível por 3"

// function checarPar(){
//     let n = prompt('digite o numero')
//     if(n/2 == 0){
//         alert(n + 'é par')
//     }else if(n/3 == 0){
//         alert(n + 'divisivel por 3')
//     }else if (n/2==0 && n/3 ==0){
//         alert('é par e divisivel por dois')
//     }else{
//         alert('eitaaaaaaaaaaa')
//     }
// }





// Exercício 6
// Escreva um programa que desenhe o padrão abaixo utilizando um laço que tenha tamanho 5.
// * *
// *
// * * *
// * * * *
// * * * * *
// declar a função da escada e por como parâmetro a quantidade de degraus desejados
function escadinha(qtdegrau){
    // fazer um array onde gurdará a sua escada
    let arrayStar = [];
    // fazer um for para imprimir a quantidade de degaru enquanto houver 
    for(i=1;i<qtdegrau;i++){
    // fazer um push para colocar a quantidade de degrau dentro do array
        arrayStar.push('*'.repeat(i))
    }
    return arrayStar;
}

// Exercício 7 -Escreva um código que, considerando os scores abaixo, consiga dar uma nota para os alunos.
// Scores
// Nome do estudante Score
// Soter 80
// Paula 77
// Caio 88
// Amanda 95
// Mateus 68
// As notas são as seguintes:
// Notas
// Valor Nota
// <30 E
// <40 D
// <60 C
// <80 B
// <90 A
// Saída:
// ["Soter: Nota C",
// "Paula: Bota C",
// "Caio: Nota B",
// "Amanda: Nota A",
// "Mateus: Nota C"]

