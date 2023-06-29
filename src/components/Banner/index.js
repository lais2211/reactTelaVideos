import './Banner.css'

const Banner = ({imagem}) => {
return(
    <div className='banner' style={{backgroundImage: `url('/images/banner-${imagem}.png')`}}>

    </div>
)
}

export default Banner;