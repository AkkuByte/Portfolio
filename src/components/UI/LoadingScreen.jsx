import React from 'react';
import { useProgress } from '@react-three/drei';
import './LoadingScreen.css';

export default function LoadingScreen() {
  const { active, progress } = useProgress();

  return (
    <div className={`loading-screen ${active ? '' : 'loading-screen--hidden'}`}>
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
