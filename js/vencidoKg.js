const form4 = document.getElementById("novoItem4")
const lista4 = document.getElementById("lista4")
const itens4 = JSON.parse(localStorage.getItem("itens4")) || []

itens4.forEach( (elemento) =>{
    criaElemento4(elemento)
})

form4.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    const codigo = evento.target.elements['codigo']
    const quantidade = evento.target.elements['quantidade']
    const data = evento.target.elements['data']

    const itemAtual4 = {
        "codigo": codigo.value,
        "quantidade": quantidade.value,
        "data": data.value
    }

    criaElemento4(itemAtual4)
    
    itens4.push(itemAtual4)

    localStorage.setItem("itens4", JSON.stringify(itens4))

    codigo.value = ""
    quantidade.value = ""
    data.value = ""
})

function criaElemento4(item4){

    const dataBrasileira = item4.data.split('-').reverse().join('/');

    const novoitem4 = document.createElement('li')
    novoitem4.classList.add("itensLista")

    novoitem4.innerHTML = item4.codigo + " - " + item4.quantidade + "Kg. - " + dataBrasileira   
    
    novoitem4.appendChild(botaoDelete4(item4.id))

    lista4.appendChild(novoitem4)
}

function botaoDelete4(id){
    const elementoBotao4 = document.createElement("button")
    elementoBotao4.classList.add("botaoDelete")
    elementoBotao4.innerText = "X"

    elementoBotao4.addEventListener("click", function(){
      deletaElemento4(this.parentNode, id);
    })

    return elementoBotao4
}

function deletaElemento4(tag, id){
    tag.remove()

    itens4.splice(itens4.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("itens4", JSON.stringify(itens4))
}
