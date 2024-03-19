import './additional.css';
import cat_playing from './Images/cat_playing.png'



function Additional() {
    return(
        // Additional
        <div className="additional">
                <div className="container">
                    <div className="additional-inner">
                        <div className="additional-text">
                            <p className='additional-heading'>Você e o seu pet ainda mais conectados!</p>
                            <p>Nosso app simplifica a vida do tutor, registrando o histórico de saúde do pet, gerenciando gastos mensais e conectando você a uma comunidade animada de pais de pets.</p>
                            <button>Acessar agora!</button>
                        </div>
                        <div className="additional-img">
                            <img src={cat_playing} alt="" />
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default Additional;