const botao = document.getElementById("btn1")
const campoBusca = document.getElementById("busca")
const cadastrar = document.getElementById("btn2")


botao.onclick = (event) => {
    event.preventDefault() 
    fetch(`http://localhost:3000/prodN/${campoBusca.value}`)
    .then((resposta) => resposta.json())
    .then((dados) => {
        const compResposta = document.getElementsByID("produtos_x")
        if(dados.length == 0){
            compResposta.innerHTML = "erro  "
        }else{
            let conteudo = '';
            for (let i = 0; i < dados.lenght; i++) {
                
               conteudo = `<div class="principal">
               <div class="produtos_x_card">
                   <img class=produtos_card_img src="./img/cel1.jpg" alt="Celular 1">
                   <h3>${dados.nome}</h3>
                   <p>${dados.categoria}</p>
                   <p>${dados.descricao}</p>

               </div>`
            compResposta.innerHTML = conteudo           
            }   
            
        }
    })
}

cadastrar.onclick = (event) =>{
    event.preventDefault()
    const cadResposta = document.getElementsByID("cadastroP")
    const conteudo = ` <div class="form-group">
    Nome do produto: <input id="in1" type="text" class="form-control busca in" placeholder="">
    Categoria: <input id="in2" type="text" class="form-control busca in" placeholder="">
    Preço: <input id="in3" type="text" class="form-control busca in" placeholder="">
    <button type="submit" id="btn3" class="btn btn-default btn1 btn3">Inserir</button>
</div>`
    cadResposta.innerHTML(conteudo)
}

const insere = document.getElementById("btn3")


insere.onclick = (event) =>{

    const dados = {
        nome: document.getElementById("in1").value,
        categoria: document.getElementById("in2").value,
        preco: document.getElementById("in3").value
    }
    fetch('http://localhost:3000/prod/', {method: "POST", body: JSON.stringify({
        nome: dados.nome,
        categoria: dados.categoria,
        preco: dados.categoria
    })})

}








