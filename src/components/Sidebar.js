import React from "react"; 
import {NavLink} from "react-router-dom";

function Sidebar() {
    return (
        <div className="bg-dark text-white p-3 vh-100" style={{width:'200px'}}>
            <h4>AK</h4>
            <NavLink to="/" className='d-block py-2 text-white'>Home</NavLink>
            <NavLink to="/about" className='d-block py-2 text-white'>About</NavLink>
            <NavLink to="/skills" className='d-block py-2 text-white'>Skills</NavLink>
            <NavLink to="/education" className='d-block py-2 text-white'>Education</NavLink>
            <NavLink to="/projects" className='d-block py-2 text-white'>Projects</NavLink>
            <NavLink to="/experience" className='d-block py-2 text-white'>Experience</NavLink>
            <NavLink to="/contact" className='d-block py-2 text-white'>Contact</NavLink>
        </div>

    );
}
export default Sidebar;