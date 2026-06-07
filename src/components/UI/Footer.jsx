import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLoading } from '../../context/LoadingContext';
import { FaHeart, FaGithub, FaLinkedin, FaBriefcase } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const { isLoading } = useLoading();

  useGSAP(() => {
    if (isLoading) return;

    gsap.from('.footer-section', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 90%',
      }
    });

    // Fix for production layout shifts
    const handleRefresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleRefresh);
    window.addEventListener("resize", handleRefresh);

    return () => {
      window.removeEventListener("load", handleRefresh);
      window.removeEventListener("resize", handleRefresh);
    };
  }, { scope: footerRef, dependencies: [isLoading] });

  return (
    <footer className="main-footer" ref={footerRef}>
      <div className="footer-content glass-panel">
        
        {/* Left Side: Links */}
        <div className="footer-section footer-links">
          <h3 className="text-gradient" style={{ '--gradient-cosmic': 'linear-gradient(135deg, var(--fire-200), var(--fire-400))' }}>Quick Links</h3>
          <ul>
            <li><a href="https://github.com/AkkuByte" target="_blank" rel="noopener noreferrer"><FaGithub className="link-icon" /> GitHub</a></li>
            <li><a href="#Home"><FaBriefcase className="link-icon" /> Portfolio</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><SiLeetcode className="link-icon" /> LeetCode</a></li>
            <li><a href="https://www.linkedin.com/in/akash-kumar-43182a1a9/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="link-icon" /> LinkedIn</a></li>
          </ul>
        </div>

        {/* Right Side: Contact Form */}
        <div className="footer-section footer-contact">
          <h3 className="text-gradient" style={{ '--gradient-cosmic': 'linear-gradient(135deg, var(--fire-200), var(--fire-400))' }}>Contact Me</h3>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="3" required></textarea>
            <button type="submit" className="submit-btn glass-panel">Send Message</button>
          </form>
        </div>

      </div>
      
      {/* Bottom Very Small Text */}
      <div className="footer-bottom">
        <p>Made with <FaHeart className="heart-icon" /> by Akku © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
