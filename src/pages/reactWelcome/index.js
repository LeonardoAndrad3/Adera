// import logo from '~/src/logo.svg';
import './style.css';
import { useState } from 'react';
import Button from 'components/Button';

function ReactWelcome() {
  const [count, setCount] = useState(0)

  function handleClick(props){
    console.log(props)
    setCount(count+1)
  }

  return (
    <div className="App">
      <header className="App-header">

        <p>
          <Button id={1} count={count} onClick={handleClick} color="red"/>
          <Button id={2} count={count} onClick={handleClick} style={{background:"red"}}/>
        </p>
      
      </header> 
    </div>
  );
}

export default ReactWelcome;
