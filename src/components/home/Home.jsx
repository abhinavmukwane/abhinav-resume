import React from "react";


const Home = () => {

    return (

       
        <section className="ms-home ms-slide home-section body-bg">
        <div className="container-fluid p-0">
            <div className="ms-row">
                <div className="col-lg-6 col-md-12 border-content">
                    <div className="profile-img main-bg-black" id="particles-js">
                        <div className="profile-detail">
                            <img src="assets/img/profile.jpg" alt="profile" data-tilt />
                            <ul className="ms-social">
                                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="https://linkedin.com/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 border-content-color">
                    <div className="ms-detail">
                        <div className="info">
                            <h1>I'm <span>Abhinav Mukwane</span></h1>
                            <h2><span>-</span>I'm a Fullstack Developer</h2>
                            <p>The goal isn't to build a website. The goal is to build your business. With Creative, flexible and affordable website design and development.</p>
                            <a className="custom-btn ms-btn m-r-5px" href="assets/Abhinav-Mukwane.pdf">Download CV</a>
                            <a className="custom-btn ms-btn-1 nav-about" href="javascript:void(0)">More Info</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </section> 
    
    )
}

export default Home;