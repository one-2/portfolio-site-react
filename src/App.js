// Written by Stephen Elliott on 12/1/2024

// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap css

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './header/Header';
import Footer from './footer/Footer';

import LandingPage from './landing/LandingPage';
import Projects from './projects/Projects';
import Blogs from './blogs/Blogs';
import Contact from './contact/Contact';

function App() {
  return (
    <Router>
      <div className='App'>     {/* root element */}
        <div className='Header'>
          <Header />
        </div>
        
        <div className='Current-page'>
          {/** May be able to set this up with the useLocation hook. */}
        </div>

        <div className='Footer'>
          <Footer />
        </div>
      </div>
      <Routes>
        <Route path='/LandingPage' element={<LandingPage />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
