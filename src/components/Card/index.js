import { useFavoritoContext } from 'contextos/Favoritos'
import './Card.css'
import iconeFavoritar from './unfavorite.png'
import iconeDesfavoritar from './favorite.png'
import { Link } from 'react-router-dom'

const Card = ({id,titulo,capa}) => {
const{favorito,adicionarFavorito} = useFavoritoContext();
const ehFavorito = favorito.some((fav) => fav.id === id);
const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;
return(
    <div className='container'>
        <Link className='link' to={`/${id}`}>
        <img src = {capa} alt={titulo} className='capa'></img>
        <h2>{titulo}</h2>
        </Link>
        <img src={icone} alt='Favoritar Filme' className='favoritar' onClick={() => adicionarFavorito({id,titulo,capa})}></img>
    </div>
)

}
export default Card;