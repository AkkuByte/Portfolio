import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './footer.css';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.footer-column-wrapper');

    // Cards start stacked off-screen at the bottom and spread into a hand of cards
    gsap.fromTo(cards, 
      {
        x: (index) => {
          // Offsets to stack them exactly in the center
          const offsets = [28, 9, -9, -28];
          return `${offsets[index]}vw`;
        },
        y: "50vh",
        rotation: 0,
      },
      {
        x: 0,
        y: 0,
        rotation: (index) => {
          // Final fan rotation angles
          const rots = [-15, -5, 5, 15];
          return rots[index];
        },
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%", 
          end: "top 30%",
          scrub: 1.5, // Smooth catching up effect
        }
      }
    );
  }, { scope: containerRef });

  return (
    <footer ref={containerRef}>
      <div className="footer-column-wrapper">
        <div className="footer-column">
          <h1>Hello</h1>
          <div className="cont">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum qui assumenda labore ullam dolores earum dolor? Dolore ad saepe reiciendis nemo, recusandae ut sint facere, odit voluptatibus omnis enim.</p>
          </div>
        </div>
      </div>
      <div className="footer-column-wrapper">
        <div className="footer-column">
          <h1>Hello</h1>
          <div className="cont">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum qui assumenda labore ullam dolores earum dolor? Dolore ad saepe reiciendis nemo, recusandae ut sint facere, odit voluptatibus omnis enim.</p>
          </div>
        </div>
      </div>
      <div className="footer-column-wrapper">
        <div className="footer-column">
          <h1>Hello</h1>
          <div className="cont">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum qui assumenda labore ullam dolores earum dolor? Dolore ad saepe reiciendis nemo, recusandae ut sint facere, odit voluptatibus omnis enim.</p>
          </div>
        </div>
      </div>
      <div className="footer-column-wrapper">
        <div className="footer-column">
          <h1>Hello</h1>
          <div className="cont">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum qui assumenda labore ullam dolores earum dolor? Dolore ad saepe reiciendis nemo, recusandae ut sint facere, odit voluptatibus omnis enim.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
