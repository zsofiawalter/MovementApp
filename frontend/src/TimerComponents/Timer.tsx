import React, { useState, useEffect } from 'react';
import './timer_style.css'; // Import CSS for styling

interface TimerProps {
  minutes: number;
  seconds: number;
  title: string;
  onComplete: () => void;
}

const Timer: React.FC<TimerProps> = ({ minutes, seconds, title, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState<number>(minutes * 60 + seconds);
  const [timerRunning, setTimerRunning] = useState<boolean>(true);
  const [timerComplete, setTimerComplete] = useState<boolean>(false);

  useEffect(() => {
    if (timerRunning && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (timeLeft <= 0) {
      setTimerComplete(true);
      onComplete();
    }
  }, [timeLeft, timerRunning, onComplete]);

  const displayMinutes: string = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const displaySeconds: string = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="countdown-container">
      <div className='title'>
        <p className='title-text'>{title}</p>
      </div>
      {(
        <div className="timer">
          <p className="timer-text">{displayMinutes}:{displaySeconds}</p>
        </div>
      )}
    </div>
  );
};
export default Timer;
