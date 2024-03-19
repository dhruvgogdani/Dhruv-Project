import './news.css';
import dog from './Images/dog.png'
import arrow from './Images/arrow.png'



function News() {
    return(
    //News  
    <div className="news">
    <div className="container">
        <div className="news_inner">
            <div className="news_text">
                <p className='news_heading'>Não perca as nossas atualizações!</p>
                <p>Cadastre-se para receber novidades, novas ferramentas, descontos, atualizações...</p>
                <p className='point'><span>01</span> Receba atualizações em primeira mão</p>
                <p className='middle'><span>02</span> Obtenha cupons de descontos </p>
                <p className='point'><span>03</span> Leia artigos sobre temas relevantes</p>
                <div className='news_input'>
                    <input type="email" placeholder='Insira o seu email...' />
                    <button><img src={arrow} alt='/'/></button>
                </div>
            </div>
            <div className="news_img">
                <img src={dog} alt='/' />
            </div>
        </div>
    </div>
</div>

    );
}

export default News;