import { Link } from "react-router-dom";
import "./Cabecalho.css"
import logo from './logo.png'
import CabecalhoLink from "components/CabecalhoLink";

const Cabecalho = () => {
    return(
        <header className="cabecalho">
            <Link to= "./">
                <img src = {logo} alt="Logo do cine"></img>
            </Link>
            <nav>
                <CabecalhoLink url = "./">
                Home
                </CabecalhoLink>
                <CabecalhoLink url = "./favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
} 
export default Cabecalho;