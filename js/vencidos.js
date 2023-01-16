const form1 = document.getElementById("novoItem1")
const lista1 = document.getElementById("lista1")
const itens1 = JSON.parse(localStorage.getItem("itens1")) || []

itens1.forEach( (elemento) =>{
    criaElemento1(elemento)
})

form1.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    const codigo = evento.target.elements['codigo']
    const quantidade = evento.target.elements['quantidade']
    const data = evento.target.elements['data']

    const itemAtual1 = {
        "codigo": codigo.value,
        "quantidade": quantidade.value,
        "data": data.value   
    }

    criaElemento1(itemAtual1)

    itens1.push(itemAtual1)

    localStorage.setItem("itens1",JSON.stringify(itens1))
    
    codigo.value = ""
    quantidade.value = ""
    data.value = ""
})

function criaElemento1(item1){
    
    const dataBrasileira = item1.data.split('-').reverse().join('/');

    const novoitem1 = document.createElement('li')
    novoitem1.classList.add("itensLista")
    
    novoitem1.innerHTML = item1.codigo + " - " + item1.quantidade + "Und. - " + dataBrasileira   
    
    novoitem1.appendChild(botaoDelete1(item1.id))

    lista1.appendChild(novoitem1)   
}

function botaoDelete1(id){
    const elementoBotao1 = document.createElement("button")
    elementoBotao1.classList.add("botaoDelete")
    elementoBotao1.innerText = "X"

    elementoBotao1.addEventListener("click", function(){
      deletaElemento1(this.parentNode, id)
    })

    return elementoBotao1
}

function deletaElemento1(tag, id){
    tag.remove()

   itens1.splice(itens1.findIndex(elemento => elemento.id === id), 1)

   localStorage.setItem("itens1", JSON.stringify(itens1))
   
}