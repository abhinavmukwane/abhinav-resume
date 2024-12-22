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
                            
                            <li><a href="https://www.instagram.com/abhinavmukwane/"><i className="fa fa-instagram" ></i></a></li>
                            <li><a href="https://github.com/abhinavmukwane"><i className="fa fa-github" ></i></a></li>
                            <li><a href="https://www.linkedin.com/in/abhinav-mukwane/"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="https://trailblazer.me/id/abhinav-mukwane"><i className="fa fa-cloud"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 border-content-color">
                    <div className="ms-detail">
                        <div className="info">
                            <h1>Hi,</h1>
                            <h1>I'm <span>Abhinav Mukwane</span></h1>
                            <h1>I'm Fullstack Developer</h1>
                            <p>Software Developer @ <a href="https://www.softtrust.com/" target="_blank">Trust Fintech Limited, Nagpur</a></p>
                            <a className="custom-btn ms-btn m-r-5px" href="assets/Abhinav-Mukwane.pdf">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    
    )
}

export default Home;
