import React, { useState, useEffect } from 'react';
import { useProgress } from '@react-three/drei';
import './LoadingScreen.css';

export default function LoadingScreen() {
  const { active, progress } = useProgress();
  const [isVisible, setIsVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // If Drei's loading manager becomes active, mark as started
    if (active) {
      setHasStarted(true);
    }
    
    // Hide the loader only after it has started and then finished,
    // OR if it never started but a few seconds have passed (fallback for cached models)
    if (hasStarted && !active) {
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [active, hasStarted]);

  // Fallback: If 3D model is cached and loads instantly, hide after a short delay
  useEffect(() => {
    const fallback = setTimeout(() => {
      if (!active) setIsVisible(false);
    }, 1500);
    return () => clearTimeout(fallback);
  }, [active]);

  // Lock body scroll while the loading screen is active
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  return (
    <div className={`loading-screen ${isVisible ? '' : 'loading-screen--hidden'}`}>
      <div className="loading-container">
        <div className="spinner-container">
          <div className="spinner-ring"></div>
          <div className="spinner-core"></div>
        </div>
        <div className="loading-text">
          <span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span>
        </div>
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="progress-text">{Math.round(progress)}%</div>
      </div>
    </div>
  );
}
