import React from "react";

const Contact = () => {

    return (

        <section className="ms-contact-section ms-slide padding-tb-80 body-bg">
        <div className="container d-block">
            <div className="section-title">
                <h2>Get in <span>Touch</span></h2>
                <span className="ligh-title">Contact</span>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <iframe title="location" src="//maps.google.com/maps?q=%20Nagpur+(Nagpur)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" allowfullscreen=""></iframe>
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="fname" placeholder="Full Name" />
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" id="umail" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="phone" placeholder="Phone" />
                        </div>
                        <div className="form-group">
                          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                        </div>
                        <button type="submit" className="custom-btn ms-btn-1">Submit</button>
                      </form>
                </div>
            </div>
            <div className="row p-t-80 ms-contact-detail m-tb-minus-12">
                <div className="col-xs-12 col-sm-6 col-lg-4 p-tp-12">
                    <div className="ms-box">							
                        <div className="detail">
                            <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                            <div className="info">
                                <h3 className="title">Mail</h3>
                                <p>
                                    <i className="fa fa-envelope" aria-hidden="true"></i> abhinavmukwane@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="space"></div>
                    </div> 
                </div>
                    
                <div className="col-xs-12 col-sm-6 col-lg-4 p-tp-12">
                    <div className="ms-box">							
                        <div className="detail">
                            <div className="icon"><i className="fa fa-mobile" aria-hidden="true"></i></div>
                            <div className="info">
                                <h3 className="title">Contact</h3>
                                <p>
                                    <i className="fa fa-mobile" aria-hidden="true"></i> (+91)-8668XXXXXX
                                </p>
                            </div>
                        </div>
                        <div className="space"></div>
                    </div> 
                </div>
                    
                <div className="col-xs-12 col-sm-6 col-lg-4 p-tp-12 m-auto">
                    <div className="ms-box">							
                        <div className="detail">
                            <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                            <div className="info">
                                <h3 className="title">Address</h3>
                                <p>
                                    <i className="fa fa-map-marker" aria-hidden="true"></i> Nagpur, Maharashtra
                                </p>
                            </div>
                        </div>
                        <div className="space"></div>
                    </div> 
                </div>		    
            </div>
        </div>
    </section>

    )

}

export default Contact;