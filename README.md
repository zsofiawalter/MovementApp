# MovementApp
Welcome to MovementApp, the world's first application designed to tell you when move. 

## Frontend
The **frontend** directory contains the React App that serves as our primary interface for user interaction. 

### Implementation
* The Timer is implemented in **frontend/src/TimerComponents/Timer.tsx** This component is a countdown timer that starts automatically when rendered. It is instantiated with the number of minutes and seconds to countdown, a title, and a callback function to call when the timer is complete. 
* Focus Time and Movement Time are configured in **frontend/src/TimerComponents/time_config.json** 
* Components are rendered corresponding to finite states. The initial state waits for the user to click the *Start* button. This enters *Focus* state. Once the *Focus* timer completes, the *Move* state is entered. Upon the termination of the *Move* countdown, the *Focus* state is re-entered until the user clicks the *Stop* button, returning to the inital state. 

### How to Run
1. Open a terminal in the **frontend** directory
2. Configure the *Focus* and *Move* times in **frontend/src/TimerComponents/time_config.json**
3. Start the React development server by running <code>npm start</code> in your terminal

