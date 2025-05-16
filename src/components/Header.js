import React from "react";
import { Link } from "react-router-dom";        
import App from "../App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import '../assets/css/main.css';
import profile from '../assets/img/hero-bg.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
    return(
        <header className="header dark-background d-flex flex-column" id="header">
            <i className="header-toggle d-xl-none bi bi-list"></i>
            <div className="profile-img">
                <img src={profile} alt="pr"  className="img-fluid rounded-circle "/>
            </div>
            <a href="/" className="logo d-flex align-items-center justify-content-center">
                <h1 class="sitename">Syed Akhter Hussain</h1>
            </a>
            <div class="social-links text-center">
                <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
            <nav id="navmenu" class="navmenu">
                <ul>
                    <li><Link to="/" className="active"><i class="bi bi-house navicon"></i>Home</Link></li>
                    <li><Link to="/about"><i className="bi bi-person navicon"></i> About</Link></li>
                    <li><Link to="/resume"><i class="bi bi-file-earmark-text navicon"></i> Resume</Link></li>
                    <li><Link to="/portfolio"><i className="bi bi-images navicon"></i> Portfolio</Link></li>
                    <li><Link to="/services"><i className="bi bi-hdd-stack navicon"></i> Services</Link></li>
                    <li><Link to="/contact"><i className="bi bi-envelope navicon"></i> Contact</Link></li>
                </ul>
            </nav>
        </header>
        
    
    );
}

export default Header;