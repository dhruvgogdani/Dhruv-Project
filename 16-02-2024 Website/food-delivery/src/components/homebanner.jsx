import './homebanner.css';
import img1 from '../assets/home-img1.png';

function Banner() {
    return (
        <>
        {/**************************** **********/}
            <div className="Home">
                <div className="container-fluid Home-Main">
                    <div className="row gx-0">
                    {/**************************** **********/}
                        <div className="col-md-6">
                            <div className="home_col1">
                                <h1 className="pe-md-5">Your Favourite Food Delivered Hote & Fresh</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dicta sed odio corporis commodi obcaecati repudiandae asperiores id velit dolor.</p>
                                <button className="btn2">Order Now <i className="fa-solid fa-arrow-right"></i> </button>
                            </div>
                        </div>
                        {/**************************** **********/}
                        <div className="col-md-6">
                            <div className="home_col2">
                                <img src={img1} alt='' className='img-fluid'></img>
                            </div>
                        </div>  
                        {/**************************** **********/}
                    </div>
                </div>
            </div>

        </>

    );
}

export default Banner;