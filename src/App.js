import React,{useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import About from './sections/About';
import MainPage from './components/MainPage';
// import Resume from './sections/Resume';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  },
  []);
  return (
   <Router>
   <Header/>
   <main id='main'>
    <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/about" element={<About/>}/>
    {/* <Route path="/resume" element={<Resume/>}/> */}
    {/* <Route path="/portfolio" element={<Portfolio/>}/> */}
    {/* <Route path="/services" element={<Services/>}/> */}
    {/* <Route path="/contact" element={<Contact/>}/> */}
    </Routes>

   </main>
   
    
   </Router>
  );
}
export default App;