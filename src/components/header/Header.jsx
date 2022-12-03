import React from "react";

const Header = () => {

    return (
        
        <header>
        <div className="sidebar-title">
            <h5>Menu</h5>
            <button className="nav-close"><i className="fa fa-times"></i></button>
        </div>
        <nav className="ms-navigation">
            <div>
                <ul>
                    <li><a href="/#" className="navs-link nav-home" data-section="ms-home"><i className="fa fa-home"></i><span>Home</span></a><span className="noty"><span>Home</span></span></li>
                    <li><a href="/#" className="navs-link nav-about" data-section="ms-about-section"><i className="fa fa-user"></i><span>About</span></a><span className="noty"><span>About</span></span></li>
                    <li><a href="/#" className="navs-link nav-experience" data-section="ms-experience-section"><i className="fa fa-briefcase"></i><span>Edu. & Exp.</span></a><span className="noty"><span>Edu. & Exp.</span></span></li>
                    <li><a href="/#" className="navs-link nav-portfolio" data-section="ms-portfolio-section"><i className="fas fa-folder-open"></i><span>Portfolio</span></a><span className="noty"><span>Portfolio</span></span></li>
                    <li><a href="/#" className="navs-link nav-contact" data-section="ms-contact-section"><i className="fa fa-envelope"></i><span>Contact</span></a><span className="noty"><span>Contact</span></span></li>
                </ul>
            </div>
        </nav>
        <ul className="ms-social">
                            
                    <li><a href="https://www.instagram.com/abhinavmukwane/"><i className="fa fa-instagram" ></i></a></li>
                    <li><a href="https://github.com/abhinavmukwane"><i className="fa fa-github" ></i></a></li>
                    <li><a href="https://www.linkedin.com/in/abhinav-mukwane/"><i className="fa fa-linkedin"></i></a></li>
            </ul>
        </header>
    
    
    )
}

export default Header;