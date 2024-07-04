import React, { useState } from 'react';
import Timer from './TimerComponents/Timer';
import time_vals from './TimerComponents/time_config.json'
import "./App.css"
import { start } from 'repl';

const App: React.FC = () => {
  const [showFocus, setShowFocus] = useState<boolean>(true);
  const [isStarted, setIsStarted] = useState<boolean>(false); 

  const handleFocusComplete = () => {
    setShowFocus(false);
  };

  const handleMoveComplete = () => {
    setShowFocus(true); 
  };

  const handleStart = () => {
    setIsStarted(true);
  }
  
  const handleStop = () => {
    setIsStarted(false);
    setShowFocus(true);
  }

  return (
    <div className="App">
      {!isStarted && (
        <div className='title'> 
          <div className='title-text'>Click Start to Begin!</div>
        </div>
      )}
      {showFocus && 
      isStarted && (
        <Timer
          minutes={time_vals.focus_time.minutes}
          seconds={time_vals.focus_time.seconds}
          title="Focus"
          onComplete={handleFocusComplete}
        />
      )}
      {!showFocus && 
      isStarted && (
        <Timer
          minutes={time_vals.move_time.minutes}
          seconds={time_vals.move_time.seconds}
          title="Move"
          onComplete={handleMoveComplete}
        />
      )}
      {!isStarted && (
        <button className="button" onClick={handleStart}>Start</button>
      )}
      {isStarted && (
        <button className="button" onClick={handleStop}>Stop</button>
      )}
    </div>
  );
};

export default App;
