import React from "react";
import profile from "./../assests/pic.jpg";

function Home() {
    return (
        <div className="container py-5" data-aos='fade-up'>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1>Hi, I'm Syed Akhter Hussain</h1>
                    <p>Professional Web Developer</p>
                </div>
                <div className="col-md-6 text-center">
                    <img src={profile} alt="Profile" className="img-fluid rounded-circle" width='250' />
                </div>
            </div>
        </div>
    );
}
export default Home;