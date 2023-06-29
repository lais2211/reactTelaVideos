import Cabecalho from 'components/Cabecalho';
import './PaginaBase.css'
import FavoritosProvider from 'contextos/Favoritos';
import { Outlet } from 'react-router-dom';
import Rodape from 'components/Rodape';

const PaginaBase = () =>{

return(
    <main>
        <Cabecalho/>
            <FavoritosProvider>
                <Outlet/>
            </FavoritosProvider>
        <Rodape/>
    </main>
)

}
export default PaginaBase;