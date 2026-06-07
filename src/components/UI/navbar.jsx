import './navbar.css'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLoading } from '../../context/LoadingContext';

const Navbar = () => {
  const containerRef = useRef(null);
  const { isLoading } = useLoading();

  useGSAP(() => {
    if (isLoading) return;

    gsap.from("#logo", {
      scale: 1,
      opacity: 1,
      delay: 0.4,
      duration: 1,
    });
  }, { scope: containerRef, dependencies: [isLoading] });

  return (
    <>
      <div className="navbar-spacer"></div>
      <nav className="navbar" ref={containerRef}>
        <div className="navbar-container glass-panel">
          <div className="logo" id='logo'>AKASH</div>
          <div className="nav-links">
            <a href="#Home" className="nav-link">Home</a>
            <a href="#About" className="nav-link">About</a>
            <a href="#Project" className="nav-link">Project</a>
            <a href="#Contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;