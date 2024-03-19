import './newsletter.css';

function Newsletter() {
    return (
        <div className="Newsletter">
            <div className="container py-md-5 py-3">
                <div className="row gx-0 text-center">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <h2 className="main-h2">Have Question In Mind?</h2>
                        <h2 className="main-h2">Let us help You</h2>
                        <div className="Newsletter_col">
                            <div className="input-group my-3 my-md-5 p-2">
                                <input type="email" className="form-control" placeholder="Enter your email address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <button className="btn btn-outline-secondary mt-3 mt-md-0" type="button" id="button-addon2">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
