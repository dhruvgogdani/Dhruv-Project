import './menu.css';
import img1 from '../assets/menu1-07e5369d.png';
import img2 from '../assets/menu2-992bdeee.png';
import img3 from '../assets/menu3-1c56e10f.png';
import img4 from '../assets/menu3-1c56e10f (1).png';
import img5 from '../assets/menu5-a941f353.png';
import img6 from '../assets/menu6-6385a5d3.png';


function Menu() {
    return (
        <div className="container">
            <div className="text-center">
                <span className="main-span">Menu</span>
                <h2 className="main-h2 text-center"> Explore Our Best Menu</h2>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <p className='main-p text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit assumenda provident corporis</p>
                    </div>
                    <div className='col-md-3'></div>
                </div>
                <div className="row gx-0">
                    <div className="col-md-4">
                        <div className="menu_col">
                            <img src={img1} alt="" className="img-fluid"></img>
                            <div className="menu_col_mid">
                                <div className="row">
                                    <div className="col-md-8 col-8">
                                        <h2>Rose Muffen</h2>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <h2>12 $</h2>
                                    </div>
                                </div>

                                <h6>served with french fries + drik</h6>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, earum. Ipsam possimus voluptatem culpa...</p>
                                <div className="row align-items-center">
                                    <div className="col-md-7 menu_col_icon1 col-6">
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <div className="col-md-5 text-center menu_col_icon2 col-6">
                                        <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/***************************************  *******/}
                    <div className="col-md-4">
                        <div className="menu_col">
                            <img src={img2} alt="" className="img-fluid"></img>
                            <div className="menu_col_mid">
                                <div className="row">
                                    <div className="col-md-8 col-8">
                                        <h2>Pan Cake</h2>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <h2>15 $</h2>
                                    </div>
                                </div>

                                <h6>served with french fries + drik</h6>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, earum. Ipsam possimus voluptatem culpa...</p>
                                <div className="row align-items-center">
                                    <div className="col-md-7 menu_col_icon1 col-6">
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <div className="col-md-5 text-center menu_col_icon2 col-6">
                                        <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/***************************************  *******/}
                    <div className="col-md-4">
                        <div className="menu_col">
                            <img src={img3} alt="" className="img-fluid"></img>
                            <div className="menu_col_mid">
                                <div className="row">
                                    <div className="col-md-8 col-8">
                                        <h2>Egg Muffen</h2>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <h2>10 $</h2>
                                    </div>
                                </div>

                                <h6>served with french fries + drik</h6>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, earum. Ipsam possimus voluptatem culpa...</p>
                                <div className="row align-items-center">
                                    <div className="col-md-7 menu_col_icon1 col-6">
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <div className="col-md-5 text-center menu_col_icon2 col-6">
                                        <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/***************************************  *******/}
                    <div className="col-md-4">
                        <div className="menu_col">
                            <img src={img4} alt="" className="img-fluid"></img>
                            <div className="menu_col_mid">
                                <div className="row">
                                    <div className="col-md-8 col-8">
                                        <h2>Salads</h2>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <h2>12 $</h2>
                                    </div>
                                </div>

                                <h6>served with french fries + drik</h6>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, earum. Ipsam possimus voluptatem culpa...</p>
                                <div className="row align-items-center">
                                    <div className="col-md-7 menu_col_icon1 col-6">
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <div className="col-md-5 text-center menu_col_icon2 col-6">
                                        <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/***************************************  *******/}
                    <div className="col-md-4">
                        <div className="menu_col">
                            <img src={img5} alt="" className="img-fluid"></img>
                            <div className="menu_col_mid">
                                <div className="row">
                                    <div className="col-md-8 col-8">
                                        <h2>Egg Masala</h2>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <h2>19 $</h2>
                                    </div>
                                </div>

                                <h6>served with french fries + drik</h6>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, earum. Ipsam possimus voluptatem culpa...</p>
                                <div className="row align-items-center">
                                    <div className="col-md-7 menu_col_icon1 col-6">
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <div className="col-md-5 text-center menu_col_icon2 col-6">
                                        <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/***************************************  *******/}
                    <div className="col-md-4">
                        <div className="menu_col">
                            <img src={img6} alt="" className="img-fluid"></img>
                            <div className="menu_col_mid">
                                <div className="row">
                                    <div className="col-md-8 col-8">
                                        <h2>Vegie Muffen</h2>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <h2>12 $</h2>
                                    </div>
                                </div>

                                <h6>served with french fries + drik</h6>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, earum. Ipsam possimus voluptatem culpa...</p>
                                <div className="row align-items-center">
                                    <div className="col-md-7 menu_col_icon1 col-6">
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <div className="col-md-5 text-center menu_col_icon2 col-6">
                                        <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  

                    
                </div>

                <div className='text-center py-5'>
                    <button className='btn2'>Load More</button>
                </div>
            </div>
        </div>
    );
}

export default Menu;