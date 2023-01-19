const form2 = document.getElementById("novoItem2")
const itens2 = JSON.parse(localStorage.getItem("itens2")) || []

itens2.forEach( (elemento) =>{
    criaElemento2(elemento)
})

form2.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    const codigo = evento.target.elements['codigo']
    const quantidade = evento.target.elements['quantidade']
    const data = evento.target.elements['data']

    const itemAtual2 = {
        "codigo": codigo.value,
        "quantidade": quantidade.value,
        "data": data.value 
    }
    
    criaElemento2(itemAtual2)
    
    itens2.push(itemAtual2)

    localStorage.setItem("itens2", JSON.stringify(itens2))

    codigo.value = ""
    quantidade.value = ""
    data.value = ""
})

function criaElemento2(item2){

    const dataBrasileira = item2.data.split('-').reverse().join('/');

    const novoitem2 = document.createElement('li')
    novoitem2.classList.add("itensLista")

    novoitem2.innerHTML = item2.codigo + " - " + item2.quantidade + "Und. - " + dataBrasileira  
    
    novoitem2.appendChild(botaoDelete2(item2.id))

    lista2.appendChild(novoitem2)
    
    
}

function botaoDelete2(id){
    const elementoBotao2 = document.createElement("button")
    elementoBotao2.classList.add("botaoDelete")
    elementoBotao2.innerText = "X"

    elementoBotao2.addEventListener("click", function(){
      deletaElemento2(this.parentNode, id);
    })

    return elementoBotao2
}

function deletaElemento2(tag, id){
    tag.remove()

    itens2.splice(itens2.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("itens2", JSON.stringify(itens2))
}

