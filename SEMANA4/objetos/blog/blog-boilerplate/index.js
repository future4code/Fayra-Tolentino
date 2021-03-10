// 2 - Capture os valores dos campos do HTML e crie um objeto para armazenar as informações do seu post, 
// possuindo as mesmas propriedades que serão preenchidas no formulário.


    const blogTitulo = document.getElementById("titulo-post").value;
// console.log(blogTitulo)
const blogAutor = document.getElementById("autor-post").value;
// console.log(blogAutor)
const blogConteudo = document.getElementById("conteudo-post").value;
// console.log(blogConteudo)

const colecaoDePostagem = [];
// Criar array de coleção de itens de postagem 

function criarNovoPost(){
let postagem = document.getElementById("container-de-posts");
// console.log("Deu certo?")
postagemBlog = {
    titulo: blogTitulo,
    autor: blogAutor,
    conteudo: blogConteudo,
}
}

// condição se a postagem.blog for  != de vazio .....
// array.push(postagemblog)



