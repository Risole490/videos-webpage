async function listaVideos(){
    const conexao = await fetch('http://localhost:3000/videos');
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida
}

async function criaVideo(tituloVideo, descricaoVideo, urlEmbed, imagemVideo){
    const conexao = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                titulo: tituloVideo,
                descricao: `${descricaoVideo} mil visualizações`,
                url: urlEmbed,
                imagem: imagemVideo
            }
        )
    });

    if(!conexao.ok){ // Se a conexão não for bem sucedida
        throw new Error('Não foi possível criar o vídeo') // Lança um erro
    }



    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}

async function buscaVideo(termoBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoBusca}`); // q é o parametro de busca do json-server
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}


export const conexaoApi = { 
    listaVideos,
    criaVideo,
    buscaVideo
}