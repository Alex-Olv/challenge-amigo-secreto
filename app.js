//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos= [];

function adicionarAmigo() {
   let nomeDoAmigo = document.querySelector("input").value;
    if (nomeDoAmigo == "") {
        alert('Por favor, insira um nome valido');
        return;
    }
    amigos.push(nomeDoAmigo);
    atualizarLista();
    limparCampo();
    }

function limparCampo() {
   let amigos = document.querySelector('input');
    amigos.value = '';
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    let nomes = ''; 
    for (let i = 0; i < amigos.length; i++) {
        nomes += `<li>${amigos[i]}</li>`;
    }
    lista.innerHTML = nomes; 
}

function sortearAmigo() {
   if (amigos.length < 2) {
    alert('Digite pelo menos dois nomes para sortear!');   
    } else {
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        nomeSorteado = amigos[indiceSorteado];
        resultado.innerHTML= `O amigo secreto é ${nomeSorteado}`;
    }
   }
