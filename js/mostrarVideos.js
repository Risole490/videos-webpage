import { conexaoApi } from "./conexao_api.js";

const lista = document.querySelector("[data-lista]"); // Chamando data attribute

export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>
    `;

    return video;
}

async function listaVideo() {
    try{
        const listaApi = await conexaoApi.listaVideos(); // Chamando a função listaVideos() do arquivo conexao_api.js 
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Erro ao carregar vídeos</h2>`;
    }
}

listaVideo(); // Chamando a função listaVideo() para mostrar os vídeos na tela