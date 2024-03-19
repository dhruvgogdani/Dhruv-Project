import './navbar.css'

function Navbar() {
    return (
        // Nabvar
     
            <div className='navbar'>
                <div className='container'>
                    <div className="navbar-inner">
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
                        <div className="login">
                            <button>Acessar</button>
                        </div>
                    </div>
                </div>
            </div>
       
    );
};

export default Navbar;