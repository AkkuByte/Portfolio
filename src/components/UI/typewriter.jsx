import { useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';
import { useLoading } from '../../context/LoadingContext';

// CRITICAL: Register the plugin before using it
gsap.registerPlugin(TextPlugin);

const GsapTypewriter = ({ words = ["MERN Developer", "UI/UX Designer", "Problem Solver"] }) => {
  const textRef = useRef(null);
  const { isLoading } = useLoading();

  useGSAP(() => {
    if (isLoading) return;

    // 1. Create a master timeline that loops infinitely (repeat: -1)
    const tl = gsap.timeline({ repeat: -1 });

    // 2. Loop through each word passed into the component
    words.forEach((word) => {
      tl.to(textRef.current, {
        duration: 1,           // Takes 1 second to type the word
        text: word,            // The TextPlugin handles the character-by-character math
        ease: "none",          // "none" ensures a steady, robotic typing speed
      })
      .to({}, { duration: 1 }) // Dummy tween: Pauses for 1 second so the user can read it
      .to(textRef.current, {
        duration: 0.5,         // Deletes the word twice as fast (0.5s)
        text: "",
        ease: "none",
      });
    });
  }, { dependencies: [words, isLoading] }); // Re-run if the words array changes

  return (
    <span className="typewriter-container">
      {/* GSAP will inject the text directly into this span */}
      <span ref={textRef} className="typed-text"></span>
      
      {/* We keep the same CSS blinking cursor from before */}
      <span className="cursor">|</span>
    </span>
  );
};

export default GsapTypewriter;