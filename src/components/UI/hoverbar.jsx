import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLoading } from '../../context/LoadingContext';
import './hoverbar.css'

function Hoverbar() {
    const { isLoading } = useLoading();

    useGSAP(() => {
        if (isLoading) return;
        gsap.from("#Pill",{
            translateY:50,
            opacity:0,
            scale:0.1,
            duration:3,
            delay:0, // removed delay since we wait for loading
        });
    }, { dependencies: [isLoading] });
    return (

        <div className="hover_bar" id='Pill'>

             <a href="#Home">Home </a>
            <a href="#About">About</a>
            <a href="#Project">Project</a>
            <a href="#Contact">Contact</a>

        </div>

    );
}
export default Hoverbar;