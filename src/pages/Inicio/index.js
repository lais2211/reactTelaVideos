import './Inicio.css'
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';
import Container from 'components/Container';
import { useEffect, useState } from 'react';

const Inicio = () =>{
    const [videos,setVideos] = useState([]);

    useEffect(() => {fetch('https://my-json-server.typicode.com/lais2211/cinetag-api/videos').then(resposta => resposta.json()).then(dados => setVideos(dados))}, [])

    return(
        <>
        <Banner imagem = "home"/>
        <Container>
        <Titulo>
            <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Titulo>
        <section className='videoCard'>
            {videos.map((video) => { return <Card {...video} key={video.id}></Card>})}
        </section>
        </Container>
        </>
)
}
export default Inicio;