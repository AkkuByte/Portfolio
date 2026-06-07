import './project.css'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Project() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from("h1", {
            x: 140,
            duration: 1,
            delay: 0,
            stagger: 0.3,
            opacity: 0,
        });
    }, { scope: containerRef }); // Scopes the selectors to target only h1s inside this component

    return (
        <section id="Project" ref={containerRef}>
           <div className="title">
            <h1 style={{ color: 'var(--fire-200)' }}>VS Code</h1>
            <h1 style={{ color: 'var(--fire-400)' }}>Tic Tae Toe</h1>
            <h1 style={{ color: 'var(--fire-600)' }}>Portfolio</h1>
            <h1 style={{ color: 'var(--fire-800)' }}>Spotify</h1>
           </div>
        </section>
    );
}
export default Project;