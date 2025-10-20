import { nav } from 'framer-motion/m';
import './Navbar.css'
import {useNavigate} from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="header">
        <nav className="navbar">
            <div className="nav-container">
              <div className="logo"><span className='logoInitials'>EOC</span><span>I</span><span>M</span><span>S</span></div>
              <ul className="nav-links">
                  <li><a href=""onClick={() => navigate('/')}>Introduction</a></li>
                  <li><a href="">Demo</a></li>
                  <li><a href="">About</a></li>
              </ul>
              <button className="btn-primary" onClick={() => navigate('/home')}>Get Started</button>
            </div>
        </nav>
    </header>
  )
}
