import React, { useState } from 'react';
import Timer from './TimerComponents/Timer';
import time_vals from './TimerComponents/time_config.json'
import "./App.css"
import { get_sound } from "./SoundNotifier/SoundGetter";

const App: React.FC = () => {
  const [showFocus, setShowFocus] = useState<boolean>(true);
  const [isStarted, setIsStarted] = useState<boolean>(false);


  const handleFocusComplete = () => {
    setShowFocus(false);
    const moveSound = new Audio(get_sound(false).filepath)
    moveSound.play();
  };

  const handleMoveComplete = () => {
    setShowFocus(true);
    const focusSound = new Audio(get_sound(true).filepath);  
    focusSound.play();
  };

  const handleStart = () => {
    setIsStarted(true);
    const focusSound = new Audio(get_sound(true).filepath);  
    focusSound.play();
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
          isFocus={true}
          onComplete={handleFocusComplete}
        />
      )}
      {!showFocus && 
      isStarted && 
        (
        <Timer
          minutes={time_vals.move_time.minutes}
          seconds={time_vals.move_time.seconds}
          title="Move"
          isFocus={false}
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
