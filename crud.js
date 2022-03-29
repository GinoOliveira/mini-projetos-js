
const tabela = document.getElementById("tabela")





function pegarItem(){

    var data = localStorage.getItem("nome")
    var obj = (JSON.parse(data))
    return obj

}

function limpar_campo(){

    var nome = document.getElementById("nome").value = ""
    var sobrenome = document.getElementById("sobrenome").value = ""
    var escolaridade = document.getElementById("escolaridade").value = ""
    var cpf = document.getElementById("cpf").value = ""

}



function criar(){
    
    var novo = {
        "nome" : document.getElementById("nome").value,
        "sobrenome" : document.getElementById("sobrenome").value,
        "escolaridade" : document.getElementById("escolaridade").value
    }
    
    var obj = pegarItem()
    var cpf = document.getElementById("cpf").value
    obj[cpf] = novo
    
    localStorage.setItem("nome", JSON.stringify(obj))

    escrever_tabela(obj[cpf], cpf)
    limpar_campo()
    console.log(obj);  

}

function dadosdamodal(cpf) {
    var obj = pegarItem()
    document.getElementById('enome').value = obj[cpf].nome;
    document.getElementById('esobrenome').value = obj[cpf].sobrenome;
    document.getElementById('eescolaridade').value = obj[cpf].escolaridade;
    document.getElementById('ecpf').value = cpf


}

function atualizar(){
    var cpf = document.getElementById('ecpf').value
    var obj = pegarItem()
    var novo = {
        "nome": document.getElementById('enome').value,
        "sobrenome": document.getElementById('esobrenome').value,
        "escolaridade": document.getElementById('eescolaridade').value
        
}
        obj[cpf] = novo;

        localStorage.setItem("nome", JSON.stringify(obj))
        window.location.reload()
        
        
}

function apagar(cpf){
    if (window.confirm("Você realmente quer excluir?")) {
        window.alert("O arquivo foi excluido.");
        var obj = pegarItem()
        delete obj[cpf]
        localStorage.setItem("nome", JSON.stringify(obj))
        window.location.reload()
      } else {
        window.location.reload()
      }
  
    

}

function escrever_tabela(obj, cpf){

    var newLinha = tabela.insertRow(1)

    var newCol1 = newLinha.insertCell(0)
    var newCol2 = newLinha.insertCell(1)
    var newCol3 = newLinha.insertCell(2)
    var newCol4 = newLinha.insertCell(3)

    newCol1.innerHTML = obj.nome
    newCol2.innerHTML = obj.sobrenome
    newCol3.innerHTML = obj.escolaridade
    newCol4.innerHTML =  "<Button   data-bs-toggle='modal' data-bs-target='#modal1' class='btn btn-warning' onclick='dadosdamodal(\"" + cpf + "\")' >Atualizar</Button>  <Button class='btn btn-danger' onclick='apagar(\"" + cpf + "\")'>Excluir</Button>"

}

function ler(){
    
    if(localStorage.getItem("nome") == null){
        localStorage.setItem("nome", '{}')
        console.log("meuovo")
    }
    var data = localStorage.getItem("nome")
    var obj = (JSON.parse(data))
    for(var i in obj){
        escrever_tabela(obj[i], i)
    }

}

document.addEventListener('keypress', function(e) {

    if(e.key == 'Enter') {
        document.querySelector('enviar')
    }

})

  
