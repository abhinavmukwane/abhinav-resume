import React from "react";

const About = () => {

    const birthdate = new Date('1996-05-08'); // your actual birthdate in yyyy-mm-dd format
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthdate;
    const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

    return (

        <section className="ms-about-section ms-slide padding-tb-80 body-bg">
        <div className="container">
            <div className="row">
                <div className="section-title">
                    <h2>About<span> Me</span></h2>
                    <span className="ligh-title">About</span>
                </div>
                <div className="col-lg-6">
                    <div className="ms-about-detail">
                        <h4>Personal Details</h4>
                        <div className="ms-about-info">
                            <ul className="m-r-30">
                                <li><span className="title">Full Name<b>:</b></span>Abhinav Ajay Mukwane</li>
                                <li><span className="title">Age<b>:</b></span>{ageInYears} Years</li>
                                <li><span className="title">Gender<b>:</b></span>Male</li>
                                <li><span className="title">Language<b>:</b></span>English, Hindi, Marathi</li>
                                <li><span className="title">Email<b>:</b></span>abhinavmukwane@gmail.com</li>
                                <li><span className="title">Address<b>:</b></span><span>Nagpur, Maharashtra</span></li>
                            </ul>
                        </div>
                        <br/>
                        <br/>
                        <p className="ms-text" align="justify">Having pursued a Postgraduate Diploma in Advanced Computing(PG-DAC) from C-DAC, Pune with 70.25% marks. I have developed core skills as ASP.NET, C#, .NET, ASP.NET Web API, ASP.NET MVC, Java, Advance Java, DSA, OOPS with java, React.js, Node.js, HTML, CSS, Java Script, jQuery, OS, Linux shell scripting, Git, Docker, Jira, Spring Boot, Servlet, Database (SQL), MongoDB and Software Development Methodologies.</p>
                        <p className="ms-text" align="justify">Being a Bachelor of Engineering graduate in Electrical stream, I learn designing, working and protection systems of Transformer and Motor. Using this we made a project on the Induction motor protection system which provides protection to the induction motor from any electrical fault.</p>
                        <p className="ms-text" align="justify">Having completed my diploma in electrical stream gave me understanding of the basics of electrical stream, logical thinking and analytical skills.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="ms-skill-progress">
                        <h5>ASP.NET MVC</h5>
                        <div className="progress" data-percent="80%">
                            <div className="progress-done progress-done-java" role="progressbar">
                                <span>80%</span>
                            </div>
                        </div>
                        <h5>.NET</h5>
                        <div className="progress" data-percent="75%">
                            <div className="progress-done progress-done-dsa" role="progressbar">
                                <span>75%</span>
                            </div>
                        </div>
                        <h5>C#</h5>
                        <div className="progress" data-percent="80%">
                            <div className="progress-done progress-done-spring" role="progressbar">
                                <span>78%</span>
                            </div>
                        </div>
                        <h5>JavaScript</h5>
                        <div className="progress" data-percent="65%">
                            <div className="progress-done progress-done-node" role="progressbar">
                                <span>72%</span>
                            </div>
                        </div>
                        <h5>jQuery</h5>
                        <div className="progress" data-percent="70%">
                            <div className="progress-done progress-done-node" role="progressbar">
                                <span>68%</span>
                            </div>
                        </div>
                        <h5>React.js</h5>
                        <div className="progress" data-percent="75%">
                            <div className="progress-done progress-done-react" role="progressbar">
                                <span>72%</span>
                            </div>
                        </div>
                        <h5>HTML</h5>
                        <div className="progress" data-percent="95%">
                            <div className="progress-done progress-done-html" role="progressbar">
                                <span>95%</span>
                            </div>
                        </div>
                        <h5>CSS</h5>
                        <div className="progress" data-percent="85%">
                            <div className="progress-done progress-done-css" role="progressbar">
                                <span>85%</span>
                            </div>
                        </div>
                        <h5>Database(SQL)</h5>
                        <div className="progress" data-percent="75%">
                            <div className="progress-done progress-done-sql" role="progressbar">
                                <span>75%</span>
                            </div>
                        </div>
                        <h5>Software Development Methodologies</h5>
                        <div className="progress" data-percent="65%">
                            <div className="progress-done progress-done-ps" role="progressbar">
                                <span>65%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )

}

export default About;