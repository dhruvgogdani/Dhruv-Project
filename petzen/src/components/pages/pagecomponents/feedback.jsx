import './feedback.css';
import p1 from './Images/p1.png'
import p2 from './Images/p2.png'
import p3 from './Images/p3.png'
import paw from './Images/paw_icon.png'



function Feedback() {
    return(
    //Feedback   
    <div className="feedback">
    <div className="container">
        <div className="feedback_inner">
            <p className='feedback_heading'>Saiba o que os usuários do <span>Pet <span className='zen'> Zen</span> </span>estão achando do App!</p>
            <div className="feedback_card_group">
                <div className="feedback_card">
                    <div className="upper">
                        <img src={p1} alt='/'/>
                        <div className="upper_text">
                            <p className='upper_heading'>Carlos Santana</p>
                            <p>Tutor de gato</p>
                        </div>
                        <img src={paw} className='paw' alt='/' />
                    </div>
                    <hr className='feedback_hr'/>
                    <div className="lower">
                        <p>O app simplificou o treinamento e me manteve atualizado sobre a saúde do meu amigo peludo. Nunca foi tão fácil proporcionar o melhor para ele. Recomendo a todos os amantes de animais!</p>
                    </div>
                </div>
                <div className="feedback_card">
                    <div className="upper">
                        <img src={p2} alt='/'/>
                        <div className="upper_text">
                            <p className='upper_heading'>Giovanna Lima</p>
                            <p>Tutora de cachorro </p>
                        </div>
                        <img src={paw} className='paw'  alt='/'/>
                    </div>
                    <hr className='feedback_hr'/>
                    <div className="lower">
                        <p>Desde que comecei a usar o aplicativo, percebi uma mudança positiva no comportamento do meu pet. As dicas de adestramento são valiosas!</p>
                    </div>
                </div>
                <div className="feedback_card">
                    <div className="upper">
                        <img src={p3} alt='/'/>
                        <div className="upper_text">
                            <p className='upper_heading'>Regina Santos</p>
                            <p>Tutora de gato</p>
                        </div>
                        <img src={paw} className='paw' alt='/' />
                    </div>
                    <hr className='feedback_hr'/>
                    <div className="lower">
                        <p>O app não apenas me lembra das vacinas e consultas, mas também me conectou a uma comunidade incrível de amantes de animais. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    );
}

export default Feedback;