import './delivery.css';

function Delivery() {
    return(
        <div className="Delivery">
            <div className="container text-center">
                <div className="row gx-0">
                    <div className="col-md-4">
                        <div className="Delivery_col">
                            <i className="fa-regular fa-clock"></i>
                            <h5>Today 10:00 am - 7:00 pm</h5>
                            <p>Working Hours</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="Delivery_col">
                            <i className="fa-solid fa-location-dot"></i>
                            <h5>velyka Vasy Lkisvska 100</h5>
                            <p>Get Directions </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="Delivery_col">
                            <i className="fa-solid fa-phone"></i>
                            <h5>+ 30 (063) 833 24 15</h5>
                            <p>Call Online</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );

};


export default Delivery;