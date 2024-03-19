import logo from '../assets/logo-main.png';
import './footer.css';

function Footer() {
    return (
        <div className="Footer mt-5">
            <div className="container">
                <div className="row gx-0 align-items-baseline">
                    <div className="col-md-4 Footer_col1">
                        <img src={logo} alt=""></img>
                        <div className='Footer_icons py-3'>
                            <i className='fa-brands fa-facebook-f'></i>
                            <i className='fa-brands fa-youtube'></i>
                            <i className='fa-brands fa-vimeo-v'></i>
                            <i className='fa-brands fa-twitter'></i>
                        </div>
                    </div>

                    <div className='col-md-8 Footer_col2'>
                        <div className='row'>

                            <div className='col-md-3 py-3 py-md-3'>
                                <h5>Home</h5>
                                <ul className='list-unstyled pt-3'>
                                    <li><a href='/'>Home</a></li>
                                    <li><a href='/'>Packages</a></li>
                                    <li><a href='/'>About Us</a></li>
                                    <li><a href='/'>Contact Us</a></li>
                                </ul>
                            </div>

                            <div className='col-md-3 py-3 py-md-3'>
                                <h5 className='pb-3'>Packages</h5>
                                <p>Quality</p>
                                <p>Help</p>
                                <p>Share</p>
                                <p>Carees</p>
                            </div>

                            <div className='col-md-3 py-3 py-md-3'>
                                <h5 className='pb-3'>About Us</h5>
                                <p>244-522-1542</p>
                                <p>hello@gmail.com</p>
                                <p>demo@gmail.com</p>
                            </div>

                            <div className='col-md-3 py-3 py-md-3'>
                                <h5 class="pb-3"> Contact Us</h5>
                                <p>Terms &amp; Conditions</p>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className='text-center pt-4'>
                    <p>@2023 <b>Waleed Codes</b> . All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;