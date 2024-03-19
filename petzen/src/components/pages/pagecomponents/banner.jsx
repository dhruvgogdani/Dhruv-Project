import './banner.css';
import banner_img from './Images/ilustration.png'


function Banner() {
    return(
        // Banner
        <div className="banner">
        <div className="container">
            <div className="banner-inner">
                <div className="banner-text">
                    <p className='banner-heading'>O melhor suporte no cuidado para seu <span>melhor amigo</span></p>
                    <p>Aqui, você encontrará respostas para todas as suas dúvidas, desde a escolha da melhor ração até dicas essenciais para garantir o bem-estar do seu companheiro peludo. </p>
                    <button>Acessar</button>
                </div>
                <div className="banner-img">
                    <img src={banner_img} alt="" />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Banner;