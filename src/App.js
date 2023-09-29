import './App.css';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const App = () => {
  const [leftOffset, setLeftOffset] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) {
        // Left arrow key
        setLeftOffset((prevOffset) => prevOffset - 10); // Adjust the movement speed as needed
      } else if (event.keyCode === 39) {
        // Right arrow key
        setLeftOffset((prevOffset) => prevOffset + 10); // Adjust the movement speed as needed
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      <div
        className="bottom-box"
        style={{ left: `calc(50% + ${leftOffset}px)` }}
      ></div>
    </div>
  );
};

export default App;
