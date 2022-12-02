import React from "react";

const Header = () => {

    return (
        
        <header>
        <div className="sidebar-title">
            <h5>Menu</h5>
            <a href="javascript:void(0)" className="nav-close"><i className="fa fa-times" aria-hidden="true"></i></a>
        </div>
        <nav className="ms-navigation">
            <div>
                <ul>
                    <li><a href="javascript:void(0)" className="navs-link nav-home" data-section="ms-home"><i className="fa fa-home"></i><span>Home</span></a><span className="noty"><span>Home</span></span></li>
                    <li><a href="javascript:void(0)" className="navs-link nav-about" data-section="ms-about-section"><i className="fa fa-user"></i><span>About</span></a><span className="noty"><span>About</span></span></li>
                    <li><a href="javascript:void(0)" className="navs-link nav-news" data-section="ms-news-section"><i className="fas fa-newspaper"></i><span>Education</span></a><span className="noty"><span>Education</span></span></li>
                    <li><a href="javascript:void(0)" className="navs-link nav-experience" data-section="ms-experience-section"><i className="fa fa-briefcase"></i><span>Experience</span></a><span className="noty"><span>Experience</span></span></li>
                    <li><a href="javascript:void(0)" className="navs-link nav-portfolio" data-section="ms-portfolio-section"><i className="fas fa-folder-open"></i><span>Portfolio</span></a><span className="noty"><span>Portfolio</span></span></li>
                    <li><a href="javascript:void(0)" className="navs-link nav-contact" data-section="ms-contact-section"><i className="fa fa-envelope"></i><span>Contact</span></a><span className="noty"><span>Contact</span></span></li>
                </ul>
            </div>
        </nav>
    
    </header>
    
    
    )
}

export default Header;