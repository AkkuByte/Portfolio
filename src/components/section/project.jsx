import './project.css'
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useLoading } from '../../context/LoadingContext';

gsap.registerPlugin(ScrollTrigger);

function Project() {
    const containerRef = useRef(null);
    const { isLoading } = useLoading();

    useGSAP(() => {
        if (isLoading) return;

        gsap.from(".project-card", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, { scope: containerRef, dependencies: [isLoading] });

    return (
        <section id="Project" ref={containerRef}>
           <h2 className="section-title">Featured Projects</h2>
           <div className="project-grid">
               <div className="project-card glass-panel">
                   <h1 className="text-gradient" style={{ '--gradient-cosmic': 'linear-gradient(135deg, var(--fire-200), var(--fire-400))' }}>VS Code</h1>
               </div>
               <div className="project-card glass-panel">
                   <h1 className="text-gradient" style={{ '--gradient-cosmic': 'linear-gradient(135deg, var(--fire-400), var(--fire-600))' }}>Tic Tac Toe</h1>
               </div>
               <div className="project-card glass-panel">
                   <h1 className="text-gradient" style={{ '--gradient-cosmic': 'linear-gradient(135deg, var(--fire-600), var(--fire-800))' }}>Portfolio</h1>
               </div>
               <div className="project-card glass-panel">
                   <h1 className="text-gradient" style={{ '--gradient-cosmic': 'linear-gradient(135deg, var(--fire-100), #1db954)' }}>Spotify</h1>
               </div>
           </div>
        </section>
    );
}
export default Project;