// ---------------------------------------EXERCÍCIOS INTERPRETAÇÃO DE CÓDIGO------------------------------------------

// 1.O que o código a baixo está fazendo? Qual o resultado impresso no console?
// let valor = 0 for(let i=0;i<5;i++){valor +=i}
// console.log(valor)

// Resposta:O console estará imorimindo em ordem crescente, numero de 0 a 4, enquanto o i(contador) atingir 5. Resultado impresso é 0 1 2 
// 3 4 5

// -----------------------------------------------------------------------------------------------------------------------
// 2. Leia  o código abaixo
// const lista =[10,11,12,15,18,19,21,23,25,27,30] for(let numero of lista){if (numero > 18) {console.log(numero)}}

// a-) O que vai ser impresso no console? 
// Resposta: Esse algoritmo fala que para cada numero dentro do array lista que form maior de 18, imprimiro o numero. 
// Devido a isso, o que será impresso no console é 19,21,23,25,27,30.

// b-) Se eu quisesse acessar o índice de cada elemento desssa lista, o for...of... é suficiente? Se não, o que poderia ser usado
// para fazer isso? Não, não seria suficiente pois o for...of ele irá imprimir o número em si, e não os indices dos elementos do array. 
// Para inserir o indice de cada número do array, deveria utilizar-se o indexOf()

// --------------------------------------------------EXERCÍCIOS ESCRITA DE CÓDIGO------------------------------------------------
// 3. Nas perguntas abaixo, considere que você tenha acesso a um array (chamado de "array original") que seja composto somente de 
// números .

// a-) Escreva um programa que :
// => Imprima cada um dos valores do array original.
// constroi o array, declara uma variável que será a condição para o array continuar sendo percorrido (deve ter um cumprimento, uma determinada
// quantidade de elementos) e ir para o próximo(i ++)

// const original =[10,11,12,15,18,19,21,23,25,27,30];
// let tamanho = original.length;
// for (i=0; i< tamanho;i++ ){
//     console.log(original[i]);
// }


// b-) Escreva um programa que :
// Imprima cada um dos valores do array original divididos po 10.

// LEMBRAR QUE % = RESTO E / DIVISÃO

// GERA O RESULTADO DA DIVISÃO POR 10
// const original =[10,11,12,15,18,19,21,23,25,27,30];
// let tamanho = original.length;
// for (i=0; i< tamanho;i++ ){
//     console.log((original[i])/10);
// }

// GERA O RESTO DA DIVISÃO POR 10
// const original =[10,11,12,15,18,19,21,23,25,27,30];
// let tamanho = original.length;
// for (i=0; i< tamanho;i++ ){
//     console.log((original[i])%10);
// }

// c-) Escreva um programa que: 
// => Crie um novo array contendo, somente os números pares do array original.
// Imprima esse novo array.
const original =[10,11,12,15,18,19,21,23,25,27,30];
let tamanho = original.length;
for (i=0; i< tamanho;i++ ){
    console.log((original[i  ])/10);
}

// d-) Escreva um programa que :
// Imprima o index e os valores do array da seguinte forma. "O elemnto do index i é o : número " 
// Imprima este novo array

// e-)Escreva um programa que imprima no console o maior e menor número contido no array original.





