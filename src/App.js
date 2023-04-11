import {Helmet} from "react-helmet";
import Home from './components/home/Home';
import Header from "./components/header/Header";
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/plugins/animate.css';
import './assets/css/plugins/swiper-bundle.min.css';
import './assets/css/plugins/bootstrap.css';
import './assets/css/plugins/jquery.fancybox.min.css';
import About from "./components/about/About";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <body>
    <div id="overlay_shine"></div>
    <Header />
    <div className="header-overlay"></div>
    <button  className="nav-toggle"><i className="fa fa-bars"></i></button>
    <Home />
    <About />
    <Education />
    <Contact />
    <div class="ms-cursor"></div>
    <div class="ms-cursor-2"></div>

    <Helmet>
    <script src="assets/js/plugins/jquery-3.5.1.min.js"></script>
    <script src="assets/js/plugins/bootstrap.bundle.min.js"></script>
    <script src="assets/js/plugins/jquery.fancybox.min.js"></script>
    <script src="assets/js/plugins/mixitup.min.js"></script>
    <script src="assets/js/plugins/fontawesome.js"></script>
    <script src="assets/js/plugins/tilt.jquery.js"></script>
    
    <script src="assets/js/plugins/particles.min.js"></script>
    <script src="assets/js/plugins/app.js"></script>
    
    <script src="assets/js/main.js"></script>
    </Helmet>
  </body>
  )
}

export default App;
