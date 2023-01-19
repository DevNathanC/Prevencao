const form6 = document.getElementById("modal6")
const itens6 = JSON.parse(localStorage.getItem("itens6")) || []

itens6.forEach( (elemento) =>{
    criaElemento6(elemento)
})

form6.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    const codigo = evento.target.elements['codigo']
    const quantidade = evento.target.elements['quantidade']
    const data = evento.target.elements['data']

    const itemAtual6 = {
        "codigo": codigo.value,
        "quantidade": quantidade.value,
        "data": data.value   
    }

    criaElemento6(itemAtual6)

    itens6.push(itemAtual6)

    localStorage.setItem("itens6",JSON.stringify(itens6))
    
    codigo.value = ""
    quantidade.value = ""
    data.value = ""
})

function criaElemento6(item6){
    
    const dataBrasileira = item6.data.split('-').reverse().join('/');

    const novoitem6 = document.createElement('li')
    novoitem6.classList.add("itensLista")
    
    novoitem6.innerHTML = item6.codigo + " - " + item6.quantidade + "Und. - " + dataBrasileira   
    
    novoitem6.appendChild(botaoDelete6(item6.id))

    lista6.appendChild(novoitem6)   
}

function botaoDelete6(id){
    const elementoBotao6 = document.createElement("button")
    elementoBotao6.classList.add("botaoDelete")
    elementoBotao6.innerText = "X"

    elementoBotao6.addEventListener("click", function(){
      deletaElemento6(this.parentNode, id)
    })

    return elementoBotao6
}

function deletaElemento6(tag, id){
    tag.remove()

   itens6.splice(itens6.findIndex(elemento => elemento.id === id), 6)

   localStorage.setItem("itens6", JSON.stringify(itens6))
   
}