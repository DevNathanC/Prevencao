const form5 = document.getElementById("novoItem5")
const lista5 = document.getElementById("lista5")
const itens5 = JSON.parse(localStorage.getItem("itens5")) || []

itens5.forEach( (elemento) =>{
    criaElemento5(elemento)
})

form5.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    const codigo = evento.target.elements['codigo']
    const quantidade = evento.target.elements['quantidade']
    const data = evento.target.elements['data']

    const itemAtual5 = {
        "codigo": codigo.value,
        "quantidade": quantidade.value,
        "data": data.value
    }
    
    criaElemento5(itemAtual5)

    itens5.push(itemAtual5)

    localStorage.setItem("itens5", JSON.stringify(itens5))

    codigo.value = ""
    quantidade.value = ""
    data.value = ""
})

function criaElemento5(item5){

    const dataBrasileira = item5.data.split('-').reverse().join('/');

    const novoitem5 = document.createElement('li')
    novoitem5.classList.add("itensLista")

    novoitem5.innerHTML = item5.codigo + " - " + item5.quantidade + "Und. - " + dataBrasileira   
    
    novoitem5.appendChild(botaoDelete5(item5.id))

    lista5.appendChild(novoitem5)
  
}

function botaoDelete5(id){
    const elementoBotao5 = document.createElement("button")
    elementoBotao5.classList.add("botaoDelete")
    elementoBotao5.innerText = "X"

    elementoBotao5.addEventListener("click", function(){
      deletaElemento5(this.parentNode, id);
    })

    return elementoBotao5
}

function deletaElemento5(tag, id){
    tag.remove()

    itens5.splice(itens5.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("itens5", JSON.stringify(itens5))
}