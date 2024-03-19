import './footer.css';
import facebook from './Images/facebook.png';
import twiteer from './Images/twiteer.png';
import linkdin from './Images/linkdin.png';



function Footer() {
    return(
    //   Footer 
    <div className="footer">
    <div className="container">
        <div className="footer_inner">
            <div className="footer_menu">
            <div className="logo">
                <p>Pet <span>Zen</span></p>
            </div>
            <div className="menu">
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Sobre</a></li>
                    <li><a href='/'>Serviços</a></li>
                    <li><a href='/'>Nosso App</a></li>
                    <li><a href='/'>Blog</a></li>
                </ul>
            </div>
            <div className="icons">
                <img src={linkdin} alt='/'/>
                <img src={facebook} alt='/'/>
                <img src={twiteer}  alt='/'/>
            </div>
            </div>
            <div className="info">
                <div className="contect">
                    <p className='contect_heading'>Entre em contato:</p>
                    <p>Email: email@gmail.com</p>
                    <p>Phone: 73 9 9999-9999</p>
                    <p>Endereço: </p>
                </div>
                <div className="reply">
                    <input type="email" placeholder='Email' />
                    <button>Inscreva-se no Newsletter</button>
                </div>
            </div>
            <hr className="footer_hr" />
            <div className="last">
                <p>© 2023 Danielle Fragas. Todo os direitos reservados.</p>
                <p>Política de Privacidade</p>
                <p>Política de Cookies</p>
            </div>
        </div>
    </div>
</div>

    );
}

export default Footer;