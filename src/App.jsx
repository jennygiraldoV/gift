import { useState } from "react";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [nullLevel, setNullLevel] = useState(true);
  const [level, setLevel] = useState(0);



  const handleClick = () => {
    setNullLevel(false);
    setLevel(0);
    
    
  };

  const nextStation = () => {
    if (level === 12) {
      setNullLevel(true);
    } else {
      setLevel(level + 1);
    }
  };

  const beforeStation = () => {
    if (level === 0) {
      setNullLevel(true);
      setLevel(0);
    } else {
      setLevel(level - 1);
    }
    
  }

  const stationNull = () => {
    setNullLevel(true);
  }

  return (
    <>
      <div>
        {nullLevel ? (
          <>
            <p> Level null</p>
            <h1>Sabes cuantas razones me has dado para amarte?</h1>

            <button style= {{marginRight: '10px'}} onClick={() => setCount((count) => count + 1)}>
              Click aquí para descubrirlo {count}
            </button>
            <button onClick={handleClick}>Empecemos</button>
          </>
        ) : (
          <div>
            {level === 0 && (
              <div>
                <p> Level 1</p>
                <h2>Porque eres la persona más maravillosa que he conocido</h2>
                <button style= {{marginRight: '10px'}} onClick={beforeStation}>Before</button>
                <button onClick={nextStation}>Next</button>
                
              </div>
            )}
            {level === 1 && (
              <div>
                <p> Level 2</p>
                <h2>Porque me haces sentir especial, capaz e invencible</h2>
                <button style= {{marginRight: '10px'}} onClick={stationNull}>Before</button>
                <button onClick={nextStation}>Next</button>
              </div>
            )}

            {level === 2 && (
              <div>
                <p> Level 3</p>
                <h2>Porque me haces sentir amada y respetada</h2>
                <button style= {{marginRight: '10px'}} onClick={beforeStation}>Before</button>

                <button onClick={nextStation}>Next</button>
              </div>
            )}

            {level === 3 && (
              <div>
                <p> Level 4</p>
                <h2>Porque me haces sentir feliz muy feliz</h2>
                <button style= {{marginRight: '10px'}} onClick={beforeStation}>Before</button>

                <button onClick={nextStation}>Next</button>
              </div>
            )}

            {level === 4 && (
              <div>
                <p> Level 5</p>
                <h2>Porque me haces sentir segura</h2>
                <button style= {{marginRight: '10px'}} onClick={beforeStation}>Before</button>

                <button onClick={nextStation}>Next</button>
              </div>
            )}

            {level === 5 && (
              <div>
                <p> Level 6</p>
                <h2>Porque me haces sentir libre</h2>
                <button style= {{marginRight: '10px'}} onClick={beforeStation}>Before</button>

                <button onClick={nextStation}>Next</button>
              </div>
            )}

            {level === 6 && (
              <div>
                <p> Level 7</p>
                <h2>Porque me haces sentir viva</h2>
                <button style= {{marginRight: '10px'}} onClick={beforeStation}>Before</button>

                <button onClick={nextStation}>Next</button>
              </div>
            )}

            {level === 7 && (
              <div>
                <p> Level 8</p>
                <h2>Porque me haces sentir que todo es posible</h2>
                <button style= {{marginRight: '10px'}} onClick={beforeStation}>Before</button>

                <button onClick={nextStation}>Next</button>
              </div>
            )}

            {level === 8 && (
              <div>
                <p> Level 9</p>
                <h2>Porque me haces sentir que puedo lograr lo que me proponga</h2>
                <button style= {{marginRight: '10px'}} onClick={beforeStation}>Before</button>

                <button onClick={nextStation}>Next</button>
              </div>
            )}

            {level === 9 && (
              <div>
                <p> Level 10</p>
                <h2>Porque me haces sentir que puedo ser mejor persona cada día</h2>
                <button style= {{marginRight: '10px'}} onClick={beforeStation}>Before</button>

                <button onClick={nextStation}>Next</button>
              </div>
            )}

            {level === 10 && (
              <div>
                <p> Level 11</p>
                <h2>Porque me brindas las mejores experiencias y crecemos juntas</h2>
                <button style= {{marginRight: '10px'}} onClick={beforeStation}>Before</button>

                <button onClick={nextStation}>Next</button>
              </div>
            )}

            {level === 11 && (
              <div>
                <p> Level 12</p>
                <h2>Porque eres auténtica y sin miedo a nada</h2>
                <button style= {{marginRight: '10px'}} onClick={beforeStation}>Before</button>
                <button onClick={stationNull}> Start again </button>
              </div>
            )}



          </div>
        )}
      </div>

    </>
  );
}

export default App;
