import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  const {resetButton} = props;
  return (
    <button onClick={resetButton}>Reset</button>
  );
};

const Application = () => {

  const [name, setName] = useState('');

  const reset = () => {
    setName('');
  };

  return (
    <main>
      <input
        value={name}
        onChange={(event)=>setName(event.target.value)}
        placeholder='Type Your Name' />
      <Button resetButton={reset} />
      <h1>{name ? 'Hello ' : ''}{name}</h1>
    </main>
  );
};


ReactDOM.render(<Application />, document.getElementById("root"));
