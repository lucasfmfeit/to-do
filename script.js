

function criar(event){
    event.preventDefault();
    let texto = document.querySelector("input");
    armazena(texto.value);
     
}

function armazena(valor){
    let textoEnviado = JSON.parse(localStorage.getItem("tarefas"))
    if(textoEnviado){
        textoEnviado.push(valor)
    }else {
        textoEnviado = [valor]
    }

    localStorage.setItem("tarefas",JSON.stringify(textoEnviado))
    capturarDados()
}

function capturarDados(){
    let valorCaptura =  JSON.parse(localStorage.getItem("tarefas"))
    let elementoLista = document.querySelector("ul")
    elementoLista.innerHTML=""
    for(i = 0; i < valorCaptura.length ; i++){
        var elemento = document.createElement("li")
        elemento.innerHTML = valorCaptura[i]
        elementoLista.insertAdjacentElement("beforeend", elemento)
    }
}

