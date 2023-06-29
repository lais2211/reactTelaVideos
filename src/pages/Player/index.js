import Banner from 'components/Banner';
import './Player.css'
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

const Player = () => {
    const [video,setVideos] = useState([]);
    const parametros = useParams();
    useEffect(() => {fetch(`https://my-json-server.typicode.com/lais2211/cinetag-api/videos?id=${parametros.id}`).then(resposta => resposta.json()).then(dados => {setVideos(...dados)})}, [])


if(!video){
    return<NaoEncontrada/>
}


    return(
        <>
        <Banner imagem = "player"/>
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section>
        <iframe className='iframe' width= "100%" height="100%" src={video.link} title={video.titulo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
        </>
)
}

export default Player;