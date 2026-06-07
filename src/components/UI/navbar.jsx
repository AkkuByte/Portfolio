import './navbar.css'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const tl = gsap.timeline();
tl.from("#logo", {
  y: - 20,
  scale: 0.2,
  opacity: 0,
  delay: 0.4,
  duration: 1,


});


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo" id='logo'>~/AkkuByte/</div>
      </div>
    </nav>
  );
};

export default Navbar;  