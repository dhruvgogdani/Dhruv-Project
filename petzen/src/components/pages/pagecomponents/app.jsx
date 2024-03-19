import './app.css';
import iphone from './Images/iphone.png';
import clock from './Images/fi-rr-alarm-clock.png';
import app from './Images/fi-rr-apps.png';
import confetti from './Images/fi-rr-confetti.png';
import apple from './Images/apple.png';



function App() {
    return(
        // App
        <div className="app">
                <div className="app_inner">
                    <div className="app_img">
                        <img src={iphone} alt='/'/>
                    </div>
                    <div className="app_text">
                        <p className='app_text_heading'>BAIXE O NOSSO APP!</p>
                        <p className='app_heading'><img src={clock} alt='/'/> Alertas e lembretes inteligentes</p>
                        <p>Receba notificações personalizadas para vacinas, consultas veterinárias e outras necessidades, garantindo que você nunca perca um cuidado essencial para o seu pet.</p>
                        <p className='app_heading'><img src={app} alt='/'/> Interface amigável para todos</p>
                        <p>Nosso App é projetada para ser intuitiva, permitindo que todos, independentemente da experiência digital, possam aproveitar ao máximo os recursos do aplicativo.</p>
                        <p className='app_heading'><img src={confetti} alt='/'/> Design intuitivo e atraente</p>
                        <p>Desfrute de uma interface visualmente agradável e fácil de navegar, projetada para proporcionar uma experiência fluida e atraente a cada usuário</p>
                        <button>Download App <img src={apple} alt='/'/></button>
                    </div>
                </div>
            </div>


    );
}

export default App;