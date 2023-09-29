import './App.css';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [box, setBox] = useState(window.innerWidth / 2);
  const [fire, setFire] = useState([]);

  const handleKeyPress = (e) => {
    console.log('keycode', e);
    if (e.keyCode === 37) {
      setBox(box - 5);
    }
    if (e.keyCode === 39) {
      setBox(box + 5);
    }
    if (e.keyCode === 32) {
      handleFire();
    }
  };

  const handleFire = () => {
    setFire([
      ...fire,
      {
        id: uuidv4(),
        isComplete: false,
        position: { x: box + 10, y: 20 },
      },
    ]);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [box]);

  console.log('box', box);
  console.log('fire', fire);
  return (
    <div>
      <div className="space">
        <div className="box" style={{ left: box }}></div>
        <div>
          {fire?.map((ele) => (
            <div
              className="fire"
              style={{ bottom: ele?.position?.y }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
