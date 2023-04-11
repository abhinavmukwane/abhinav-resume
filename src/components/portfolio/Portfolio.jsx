import React from "react";  

const Portfolio = () =>{

return (

    <section className="ms-portfolio-section ms-slide portfolio padding-tb-80 body-bg">
        <div className="container">
            <div className="section-title p-b-30">
                <h2>My <span>Portfolio</span></h2>
                <span className="ligh-title">Portfolio</span>
            </div>
            <div className="row m-b-minus-24px">
                <div className="portfolio-content">
                    <div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="portfolio-tabs">
                                    <ul>
                                        <li className="filter" data-filter="all">ALL</li>
                                        <li className="filter" data-filter=".design">DESIGN</li>
                                        <li className="filter" data-filter=".development">DEVELOPMENT</li>
                                        <li className="filter" data-filter=".graphics">GRAPHICS</li>
                                        <li className="filter" data-filter=".templates">Templates</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div className="portfolio-content-items">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-xs-12 mix graphics templates">
                                            <div className="hovereffect">
                                                <div className="portfolio-img">
                                                    <img src="assets/img/portfolio/11.jpg" alt="graphics" />
                                                    <h3><span>3D Graphics</span><span>Templates</span></h3>
                                                </div>
                                                <div className="overlay">
                                                    <div className="overlay-info">
                                                        <a className="info" href="/#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                                        <a className="info" data-fancybox="gallery" href=""><i className="fa fa-search" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-xs-12 mix design">
                                            <div className="hovereffect">
                                                <div className="portfolio-img">
                                                    <img src="assets/img/portfolio/22.jpg" alt="design" />
                                                    <h3><span>Web Design</span></h3>
                                                </div>
                                                <div className="overlay">
                                                    <div className="overlay-info">
                                                        <a className="info" href="/#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                                        <a className="info" data-fancybox="gallery" href="/#"><i className="fa fa-search" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-xs-12 mix design">
                                            <div className="hovereffect">
                                                <div className="portfolio-img">
                                                    <img src="assets/img/portfolio/33.jpg" alt="design" />
                                                    <h3><span>Web Design</span></h3>
                                                </div>
                                                <div className="overlay">
                                                    <div className="overlay-info">
                                                        <a className="info" href="/#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                                        <a className="info" data-fancybox="gallery" href="/#"><i className="fa fa-search" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-xs-12 mix development">
                                            <div className="hovereffect">
                                                <div className="portfolio-img">
                                                    <img src="assets/img/portfolio/44.jpg" alt="development" />
                                                    <h3><span>Development</span></h3>
                                                </div>
                                                <div className="overlay">
                                                    <div className="overlay-info">
                                                        <a className="info" href="/#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                                        <a className="info" data-fancybox="gallery" href="/#"><i className="fa fa-search" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-xs-12 mix templates design">
                                            <div className="hovereffect">
                                                <div className="portfolio-img">
                                                    <img src="assets/img/portfolio/55.jpg" alt="templates" />
                                                    <h3><span>Templates</span><span>Web Design</span></h3>
                                                </div>
                                                <div className="overlay">
                                                    <div className="overlay-info">
                                                        <a className="info" href="/#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                                        <a className="info" data-fancybox="gallery" href=""><i className="fa fa-search" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-xs-12 mix development graphics">
                                            <div className="hovereffect">
                                                <div className="portfolio-img">
                                                    <img src="assets/img/portfolio/66.jpg" alt="development" />
                                                    <h3><span>Development</span><span>3D Graphics</span></h3>
                                                </div>
                                                <div className="overlay">
                                                    <div className="overlay-info">
                                                        <a className="info" href="/#"><i className="fa fa-link" aria-hidden="true"></i></a>
                                                        <a className="info" data-fancybox="gallery" href=""><i className="fa fa-search" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
)

}

export default Portfolio;