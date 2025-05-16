import React, { useEffect } from 'react';
import AOS from 'aos';
import App from '../App';
import '../assets/css/main.css';
import 'aos/dist/aos.css';
import profile from '../assets/img/hero-bg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import  PureCounter  from '@srexi/purecounterjs';
function About() {
useEffect(() => {
  new PureCounter();

  AOS.init({
    duration: 1000,
    once: true,    
  });
}, []);
const skills =[
    { name: "HTML", value: 100},
    { name: "CSS", value: 90},
    { name: "JavaScript", value: 75},
    { name: "PHP", value: 80},
    { name: "WordPress/CMS", value: 90},
    { name: "Photoshop", value: 55},
  ];
 
return (
<>
<section id="about" className="about section">


      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>I'm <strong>Syed Akhter Hussain,</strong> currently pursuing a <strong>B.Tech in Computer Science and Engineering.</strong>I'm passionate about building modern, resposive and user-friendly web application. With keen interset in <strong>Web Development,</strong>I enjoy transforming ideas into real-world solutions though clean code and creative design.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={profile} alt="" className="img-fluid"/>
           </div>
          <div className="col-lg-8 content">
            <h2>Freelencer Web Developer.</h2>
            <p className="fst-italic py-3">
              My personal details:
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>13 Feb 2001</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91- 9127222171</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Nagaon, Assam, INDIA</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Degree</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              I'm constantly learning new technologies and framworks to enhance my skills and contribute to impactful projects. My goal is to become a well-rounded full-stack Developer capable of crafting seamless digital experiences.
            </p>
          </div>
        </div>

      </div>

    </section>
        <section id="stats" className="stats section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-emoji-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Happy Clients</strong> <span>Success & Trust.</span></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Projects</strong> <span>gained through effort and excellence</span></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-headset"></i>
              <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Hours Of Support</strong> <span>with a Focus on Convenience</span></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Hard Workers</strong> <span>Who endure difficult things and pain</span></p>
            </div>
          </div>
        </div>

      </div>

    </section>
     <section id="skills" className="skills section light-background">

      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Meeting essential needs with precision and commitment</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row skills-content skills-animation">

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}} ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill"><span>PHP</span> <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill"><span>WordPress/CMS</span> <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{width:'55%'}}></div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>

  </>
  );
}
export default About;