import './testimonial.css';
import img from '../assets/final-waleed-ishfaq-22538ac2.jpg';

function Testimonial() {
    return (
        <div className="Testimonial">
            <div className="container py-5 my-md-5">
                <div className="text-center">
                    <span className="main-span"> Testimonial</span>
                </div>
                <h2 className="main-h2 text-center">What They are Saying</h2>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <p className='main-p text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit assumenda provident corporis</p>
                    </div>
                    <div className='col-md-3'></div>
                </div>

                <div className="row gx-0 text-center py-3">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="testimonial_col">
                                <img src={img} alt="" className="img-fluid"></img>
                                <p className='pt-4 pb-1'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nihil vitae accusantium quae illo dicta? Laboriosam natus illo suscipit itaque
                                </p>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-solid fa-star'></i>
                                <i className='fa-regular fa-star'></i>
                                <h5 className='pt-3'>Waleed Ishfaq</h5>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;