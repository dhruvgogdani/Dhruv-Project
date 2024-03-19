import './about.css';
import about from '../assets/about-img-6df2a2d3.png';
import icon1 from '../assets/icon1-28ee71f2.png';
import icon2 from '../assets/icon2-ccbf2d01.png';
import icon3 from '../assets/icon3-ef171df4.png';

function About() {
    return (
        <>
        {/******************************************************  ************************************/}
            <div className="About">
                <div className="container-fluid">
                    <div className="row gx-0 align-items-center">

                        <div className="col-md-6 order-2 order-md-1">
                            <div className="About_col1 pt-md-0 pt-5">
                                <img src={about} alt="" className='img-fluid'></img>
                            </div>
                        </div>

                        <div className="col-md-6 order-1 order-md-2">
                            <div className='About_col2 pe-md-5 me-md-5 ps-md-5'>
                                <span className='main-span'>About</span>
                                <h2 className='main-h2'>Food Is An Important Part</h2>
                                <h2 className='main-h2'>Of A Balanced Diet</h2>
                                <p className='main-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit assumenda provident corporis temporibus inventore sed at consequatur reiciendis ipsa molestias.</p>
                                <p className='main-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur laudantium aliquid fuga officiis quasi vel id accusamus corporis soluta. Amet.</p>
                                <div className='about_col2_btns pt-4'>
                                    <button className='btn2' type='button'>Learn More</button>
                                    <button className='btn3 mx-2' type='button'>
                                        <i className='fa-solid fa-play'></i>
                                        Watch Now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        {/******************************************************  ************************************/}

        <div className='Work'>
            <div className='container text-center'>
                <span className='main-span'>Work</span>
                <h2 className='main-h2'>How it Works</h2>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <p className='main-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit assumenda provident corporis</p>
                    </div>
                    <div className='col-md-3'></div>
                </div>

                <div className='row gx-0 align-items-center work-main px-md-5 mx-md-3'>
                    <div className='col-md-4'>
                        <div className='work-col1'>
                            <img src={icon1} alt='' ></img>
                            <h5>Pick Meals</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus explicabo quas error modi ratione! Eaque harum voluptatum ea perferendis culpa.</p>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='work-col1'>
                            <img src={icon2} alt='' ></img>
                            <h5>Pick Meals</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus explicabo quas error modi ratione! Eaque harum voluptatum ea perferendis culpa.</p>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='work-col1'>
                            <img src={icon3} alt='' ></img>
                            <h5>Pick Meals</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus explicabo quas error modi ratione! Eaque harum voluptatum ea perferendis culpa.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;