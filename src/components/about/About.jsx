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
                        <p className="ms-text" align="justify">I hold a Post Graduate Diploma in Advanced Computing (PG-DAC) from C-DAC, Pune, and a Bachelor of Engineering in Electrical Engineering. My journey into technology has been shaped by a solid grounding in problem-solving, critical thinking, and a passion for creativity and innovation.</p>
                        <p className="ms-text" align="justify">With hands-on experience in full-stack development, I specialize in ASP.NET MVC, ASP.NET Web API, C#, .NET Framework, .NET Core, React.js, and Node.js, among other technologies. My expertise spans JavaScript, jQuery, AJAX, LINQ, database management (MS SQL, MySQL), and front-end design using HTML, CSS, and Bootstrap. I am proficient in deploying secure and efficient web applications on IIS, Docker and Azure Cloud, and I actively utilize Git, GitHub, and Visual SourceSafe for version control.</p>
                        <p className="ms-text" align="justify">Currently, I work as a Software Developer at Trust Fintech Limited, where I contribute to the development and maintenance of banking domain applications, including Loan Origination Systems (LOS) and ONDC Credit Applications. My role involves creating dynamic and interactive user experiences, optimizing back-end processes, and ensuring application security.</p>
                        <p className="ms-text" align="justify">I thrive on solving complex problems and contributing to innovative solutions that make a real-world impact. I am always eager to learn, grow, and collaborate in building cutting-edge technology.</p>
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
                         <h5>ASP.NET Web API</h5>
                        <div className="progress" data-percent="80%">
                            <div className="progress-done progress-done-java" role="progressbar">
                                <span>80%</span>
                            </div>
                        </div>
                        <h5>.NET</h5>
                        <div className="progress" data-percent="78%">
                            <div className="progress-done progress-done-dsa" role="progressbar">
                                <span>78%</span>
                            </div>
                        </div>
                        <h5>C#</h5>
                        <div className="progress" data-percent="78%">
                            <div className="progress-done progress-done-spring" role="progressbar">
                                <span>78%</span>
                            </div>
                        </div>
                        <h5>JavaScript</h5>
                        <div className="progress" data-percent="70%">
                            <div className="progress-done progress-done-node" role="progressbar">
                                <span>70%</span>
                            </div>
                        </div>
                        <h5>jQuery</h5>
                        <div className="progress" data-percent="70%">
                            <div className="progress-done progress-done-node" role="progressbar">
                                <span>70%</span>
                            </div>
                        </div>
                        <h5>React.js</h5>
                        <div className="progress" data-percent="68%">
                            <div className="progress-done progress-done-react" role="progressbar">
                                <span>68%</span>
                            </div>
                        </div>
                        <h5>Bootstrap</h5>
                        <div className="progress" data-percent="90%">
                            <div className="progress-done progress-done-html" role="progressbar">
                                <span>90%</span>
                            </div>
                        </div>
                        <h5>HTML</h5>
                        <div className="progress" data-percent="95%">
                            <div className="progress-done progress-done-html" role="progressbar">
                                <span>95%</span>
                            </div>
                        </div>
                        <h5>CSS</h5>
                        <div className="progress" data-percent="80%">
                            <div className="progress-done progress-done-css" role="progressbar">
                                <span>80%</span>
                            </div>
                        </div>
                        <h5>Database(SQL)</h5>
                        <div className="progress" data-percent="78%">
                            <div className="progress-done progress-done-sql" role="progressbar">
                                <span>78%</span>
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
