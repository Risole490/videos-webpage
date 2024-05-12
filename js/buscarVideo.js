import { conexaoApi } from "./conexao_api.js"; 
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento){
    evento.preventDefault();

    const dadosPesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conexaoApi.buscaVideo(dadosPesquisa);

    const lista = document.querySelector('[data-lista]');

    while(lista.firstChild){ // Enquanto houver um primeiro filho na lista
        lista.removeChild(lista.firstChild); // Remove todos os elementos filhos da lista
    }  // Limpa a lista de vídeos antes de mostrar a nova busca

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    if(busca.length === 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Nenhum vídeo encontrado</h2>`;
    }
}

const btnPesquisa = document.querySelector('[data-botao-pesquisa]');

btnPesquisa.addEventListener('click', evento => buscarVideo(evento));