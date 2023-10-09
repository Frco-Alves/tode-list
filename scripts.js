const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const listaCompleta = document.querySelector(".list-task")

let minhaListaDeItens = []


function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    MostrarTarefas()
}





function MostrarTarefas() {
    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {

        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
        <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
        </li>
    `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem("lista", JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida


    MostrarTarefas()
}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)

    MostrarTarefas()
}

function regarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }


    MostrarTarefas()


}


button.addEventListener("click", adicionarNovaTarefa)
