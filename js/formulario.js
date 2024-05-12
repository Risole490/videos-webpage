import { conexaoApi } from "./conexao_api.js";
const formulario = document.querySelector('[data-formulario]');

async function criaVideo(evento){
    evento.preventDefault();

    const imagem = formulario.querySelector('[data-imagem]').value;
    const titulo = formulario.querySelector('[data-titulo]').value;
    const url = formulario.querySelector('[data-url]').value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try{
        await conexaoApi.criaVideo(titulo, descricao, url, imagem)

        window.location.href = '/pages/envio-concluido.html';
    } catch (e) {
        alert(e)
    }
}

formulario.addEventListener('submit', evento => criaVideo(evento));