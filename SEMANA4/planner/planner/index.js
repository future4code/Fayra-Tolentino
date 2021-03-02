// 1 - Crie uma função que é chamada ao clicar no botão "Criar Tarefa". 
// Use um evento apropriado que identifique o clique no botão

// 2 - Dentro da função, capture o valor do campo do HTML (que é a tarefa a ser colocada no planner)
//  e armazene em uma variável

// 3 - Capture o valor do seletor do HTML (o dia da semana selecionado) e armazene em uma variável.

function criarNovaTarefa(){
    const gerarTarefa = document.getElementById("gerar-tarefa");
    // console.log("tenho o Dom!")
    const minhaTarefa = document.getElementById("tarefa").value;;
    console.log(minhaTarefa);
    const diasSemana = document.getElementById("dias-semana").value;
    console.log(diasSemana)
    

}

