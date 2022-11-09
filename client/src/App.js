import logo from './logo.svg';
import './App.css';
import { MyComp } from './mycomp';
import superhero from "superhero-name-library"
import { useState } from 'react';
import axios from 'axios';
function App() {

  const [heros, setHeros] = useState(
    superhero.allNames(10)

  )
  let t = 0;
  return (

    <div className="App">
      <header className="App-header">
        <button onClick={() => {
          let theData = heros.slice(1, heros.lenght);
          setHeros(theData);
        }}>DELETE</button>
        <br></br>
        <button onClick={() => {
          let newData= superhero.random();
          let theData= heroes;
          theData=newData
        }}>ADD</button>
        <p>

          <code>src/App.js</code>
        </p>
        {heros.map((element, index) => (<MyComp key={index} data={element} t={t++}> </MyComp>))}
      </header>
    </div>
  );
}

export default App;
