import './services.css';
import i1 from './Images/i1.png'
import i2 from './Images/i2.png'
import i3 from './Images/i3.png'
import i4 from './Images/i4.png'
import i5 from './Images/i5.png'
import i6 from './Images/i6.png'


function Services() {
    return(
        // Services
        <div className="services">
                <div className="container">
                    <div className="services-inner">
                        <p className="services-heading">Saiba dicas essenciais para dar o conforto que o seu pet merece!</p>
                        <div className="services-opt-group">
                            <div className="services-opt">
                                <img src={i1} alt='/'/>
                                <p className="services-opt-heading">Adestramento</p>
                                <p>Corrija comportamentos, eduque, divirta-se e fortaleça a relação com seu pet.</p>
                            </div>
                            <div className="services-opt">
                                <img src={i2} alt='/'/>
                                <p className="services-opt-heading">Alimentação</p>
                                <p>Saiba dietas equilibradas, aprenda sobre dietas caseiras, escolha a melhor ração e muito mais.</p>
                            </div>
                            <div className="services-opt">
                                <img src={i3} alt='/'/>
                                <p className="services-opt-heading">Adoção</p>
                                <p>Descubra nomes encantadores, dicas, o que fazer e tudo o que você precisa saber para adotar um pet.</p>
                            </div>
                            <div className="services-opt">
                                <img src={i4} alt='/'/>
                                <p className="services-opt-heading">Saúde</p>
                                <p>Aprenda tudo o que precisa saber sobre a saúde do seu pet e proteja seu pet de doenças.</p>
                            </div>
                            <div className="services-opt">
                                <img src={i5} alt='/'/>
                                <p className="services-opt-heading">Cuidados</p>
                                <p>Entenda o cio, gestação, higiene dental, cuidado das orelhas e muito mais.</p>
                            </div>
                            <div className="services-opt">
                                <img src={i6} alt='/'/>
                                <p className="services-opt-heading">Curiosidades</p>
                                <p>Aprenda dicas, descubra espécies em perigo de extinção, saiba diversas raças e muito mais. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default Services;