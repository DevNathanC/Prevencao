
const lista1 = document.querySelector("#lista1")
const lista2 = document.querySelector("#lista2")
const lista3 = document.querySelector("#lista3")
const lista4 = document.querySelector("#lista4")
const lista5 = document.querySelector("#lista5")
const lista6 = document.querySelector("#lista6")
const lista7 = document.querySelector("#lista7")



const novoItem1 = document.querySelector("#novoItem1")
const novoItem2 = document.querySelector("#novoItem2")
const novoItem3 = document.querySelector("#novoItem3")
const novoItem4 = document.querySelector("#novoItem4")
const novoItem5 = document.querySelector("#novoItem5")
const novoItem6 = document.querySelector("#novoItem6")
const novoItem7 = document.querySelector("#novoItem7")




const abrirModal1 = document.querySelector("#abrirModal1")
const abrirModal2 = document.querySelector("#abrirModal2")
const abrirModal3 = document.querySelector("#abrirModal3")
const abrirModal4 = document.querySelector("#abrirModal4")
const abrirModal5 = document.querySelector("#abrirModal5")
const abrirModal6 = document.querySelector("#abrirModal6")
const abrirModal7 = document.querySelector("#abrirModal7")




const fecharModal1 = document.querySelector("#fecharModal1")
const fecharModal2 = document.querySelector("#fecharModal2")
const fecharModal3 = document.querySelector("#fecharModal3")
const fecharModal4 = document.querySelector("#fecharModal4")
const fecharModal5 = document.querySelector("#fecharModal5")
const fecharModal6 = document.querySelector("#fecharModal6")
const fecharModal7 = document.querySelector("#fecharModal7")






function abrirForm (abrirModal, fecharModal,modal ){
    abrirModal.onclick = function(){
        modal.showModal()
    }

    fecharModal.onclick = function(){
        modal.close()
    }
    
}


abrirForm(abrirModal1, fecharModal1, modal1)
abrirForm(abrirModal2, fecharModal2, modal2)
abrirForm(abrirModal3, fecharModal3, modal3)
abrirForm(abrirModal4, fecharModal4, modal4)
abrirForm(abrirModal5, fecharModal5, modal5)
abrirForm(abrirModal6, fecharModal6, modal6)
abrirForm(abrirModal7, fecharModal7, modal7)




