const form3 = document.getElementById("novoItem3")
const lista3 = document.getElementById("lista3")
const itens3 = JSON.parse(localStorage.getItem("itens3")) || []

itens3.forEach( (elemento) =>{
    criaElemento3(elemento)
})

form3.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    const codigo = evento.target.elements['codigo']
    const quantidade = evento.target.elements['quantidade']
    const data = evento.target.elements['data']

    const itemAtual3 = {
        "codigo": codigo.value,
        "quantidade": quantidade.value,
        "data": data.value
    }

    criaElemento3(itemAtual3)
    
    itens3.push(itemAtual3)

    localStorage.setItem("itens3", JSON.stringify(itens3))

    codigo.value = ""
    quantidade.value = ""
    data.value = ""
})

function criaElemento3(item3){

    const dataBrasileira = item3.data.split('-').reverse().join('/');

    const novoitem3 = document.createElement('li')
    novoitem3.classList.add("itensLista")

    novoitem3.innerHTML = item3.codigo + " - " + item3.quantidade + "Und. - " + dataBrasileira    
    
    novoitem3.appendChild(botaoDelete3(item3.id))

    lista3.appendChild(novoitem3)

    
}

function botaoDelete3(id){
    const elementoBotao3 = document.createElement("button")
    elementoBotao3.classList.add("botaoDelete")
    elementoBotao3.innerText = "X"

    elementoBotao3.addEventListener("click", function(){
      deletaElemento3(this.parentNode, id);
    })

    return elementoBotao3
}

function deletaElemento3(tag, id){
    tag.remove()

    itens3.splice(itens3.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("itens3", JSON.stringify(itens3))
}