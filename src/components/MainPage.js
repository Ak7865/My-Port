import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import '../assets/css/main.css';
import hero from '../assets/img/pic.jpg';



function MainPage() {
    useEffect(() => {
        const options = {
            strings: ["Designer", "Developer", "Freelancer", "Coder", "Student"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        };
        const typed = new Typed(".typed", options);
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <section id='hero' className='hero section dark-background'>
            <img src={hero} alt="no" data-aos='fade-in'  className=''  />
            <div class="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Syed Akhter Hussain</h2>
        <p>I'm <span className="typed"></span></p>
      </div>


        </section>
        
    );
}
export default MainPage;