const form7 = document.getElementById("modal7")
const itens7 = JSON.parse(localStorage.getItem("itens7")) || []

itens7.forEach( (elemento) =>{
    criaElemento7(elemento)
})

form7.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    const codigo = evento.target.elements['codigo']
    const quantidade = evento.target.elements['quantidade']
    const data = evento.target.elements['data']

    const itemAtual7 = {
        "codigo": codigo.value,
        "quantidade": quantidade.value,
        "data": data.value   
    }

    criaElemento7(itemAtual7)

    itens7.push(itemAtual7)

    localStorage.setItem("itens7",JSON.stringify(itens7))
    
    codigo.value = ""
    quantidade.value = ""
    data.value = ""
})

function criaElemento7(item7){
    
    const dataBrasileira = item7.data.split('-').reverse().join('/');

    const novoitem7 = document.createElement('li')
    novoitem7.classList.add("itensLista")
    
    novoitem7.innerHTML = item7.codigo + " - " + item7.quantidade + "Und. - " + dataBrasileira   
    
    novoitem7.appendChild(botaoDelete7(item7.id))

    lista7.appendChild(novoitem7)   
}

function botaoDelete7(id){
    const elementoBotao7 = document.createElement("button")
    elementoBotao7.classList.add("botaoDelete")
    elementoBotao7.innerText = "X"

    elementoBotao7.addEventListener("click", function(){
      deletaElemento7(this.parentNode, id)
    })

    return elementoBotao7
}

function deletaElemento7(tag, id){
    tag.remove()

   itens7.splice(itens7.findIndex(elemento => elemento.id === id), 7)

   localStorage.setItem("itens7", JSON.stringify(itens7))
   
}