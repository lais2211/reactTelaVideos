import Banner from 'components/Banner';
import './Favoritos.css'
import Container from 'components/Container';
import Titulo from 'components/Titulo';
import Card from 'components/Card';
import { useFavoritoContext } from 'contextos/Favoritos';

const Favoritos = () => {

const {favorito} = useFavoritoContext();

    return(
        <>
        <Banner imagem = "favoritos"/>
        <Container>
        <Titulo>
            <h1>Meus favoritos</h1>
        </Titulo>
        <section className='videoCardFavoritos'>
        {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
           </section>
        </Container>
        </>
)

}
export default Favoritos;