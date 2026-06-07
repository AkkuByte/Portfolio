import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import GsapTypewriter from "../UI/typewriter"
import { useLoading } from '../../context/LoadingContext';
import './hero.css'

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const containerRef = useRef(null);
    const { isLoading } = useLoading();

    useGSAP(() => {
        if (isLoading) return;

        // Animate Creative and Design on scroll
        gsap.from(".line1", {
            scrollTrigger: {
                trigger: ".line1",
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 100, opacity: 0, duration: 1, ease: "power4.out"
        });
        
        gsap.from(".line2", {
            scrollTrigger: {
                trigger: ".line2",
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 100, opacity: 0, duration: 1, ease: "power4.out", delay: 0.2
        });

        // Typewriter starts after loading and lines
        gsap.from(".typewriter-container", { opacity: 0, duration: 1, delay: 0.5 });
    }, { scope: containerRef, dependencies: [isLoading] });

    return (
        <section className="hero" ref={containerRef}>
            <div className="hero-content">
                <h1 className="line1">Creative</h1>
                <h1 className="line2">Design</h1>
                <div className="typewriter-container">
                   <GsapTypewriter/>
                </div>
            </div>
        </section> 
    );
}

export default Hero;