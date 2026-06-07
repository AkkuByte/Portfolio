import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLoading } from '../../context/LoadingContext';
import './footer.css';
import { SiPython, SiCplusplus, SiMongodb, SiExpress, SiLeetcode } from 'react-icons/si';
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

function Cards() {
  const containerRef = useRef(null);
  const { isLoading } = useLoading();

  useGSAP(() => {
    if (isLoading) return;

    // Let GSAP's internal selector handle scoping automatically
    // by passing the class string directly.
    gsap.fromTo('.footer-column-wrapper', 
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
          // markers: true, // Uncomment this line if you need to debug the trigger points visually
        }
      }
    );
    
    // Refresh ScrollTrigger to ensure it calculates heights correctly after the page renders
    ScrollTrigger.refresh();
  }, { scope: containerRef, dependencies: [isLoading] });

  return (
    <footer ref={containerRef}>
      <div className="footer-column-wrapper">
        <div className="footer-column">
          <h1>Languages</h1>
          <div className="cont">
            <p>Proficient in multiple programming languages, with a strong foundation in Python and C++. I use these languages to solve complex problems and build efficient logic.</p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '15px', fontSize: '2rem' }}>
              <SiPython color="#3776AB" title="Python" />
              <SiCplusplus color="#00599C" title="C++" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-column-wrapper">
        <div className="footer-column">
          <h1>Web Dev</h1>
          <div className="cont">
            <p>Experienced in full-stack development using the MERN stack. I enjoy building scalable and dynamic web applications with MongoDB, Express.js, React, and Node.js.</p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '15px', fontSize: '2rem' }}>
              <SiMongodb color="#47A248" title="MongoDB" />
              <SiExpress title="Express.js" />
              <FaReact color="#61DAFB" title="React" />
              <FaNodeJs color="#339933" title="Node.js" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-column-wrapper">
        <div className="footer-column">
          <h1>Problem Solving</h1>
          <div className="cont">
            <p>Passionate about Data Structures and Algorithms. I am a dedicated LeetCode solver with over 300+ questions solved, constantly honing my analytical skills.</p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '15px', fontSize: '2rem' }}>
              <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                <SiLeetcode color="#FFA116" title="LeetCode" />
              </a>
              <a href="https://github.com/AkkuByte" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                <FaGithub title="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-column-wrapper">
        <div className="footer-column">
          <h1>Let's Connect</h1>
          <div className="cont">
            <p>Always open to exciting opportunities, collaborations, and discussions. I love building things that make an impact and learning new technologies along the way.</p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '15px', fontSize: '2rem' }}>
              <a href="https://www.linkedin.com/in/akash-kumar-43182a1a9/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                <FaLinkedin color="#0A66C2" title="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Cards;
