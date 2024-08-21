import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('0');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setOutput('0');
    } else if (value === '=') {
      try {
        setOutput(eval(input).toString());
        setInput('');
      } catch (error) {
        setOutput('Error');
      }
    } else {
      setInput((prev) => prev + value);
      if ('0123456789'.includes(value) || value === '.') {
        setOutput((prev) => (prev === '0' ? value : prev + value));
      }
    }
  };

  const renderButton = (value) => (
    <button
      key={value}
      id={value}
      className="btn btn-secondary"
      onClick={() => handleClick(value)}
    >
      {value}
    </button>
  );

  return (
    <div className="calculator">
      <div id="display" className="display">
        {output}
      </div>
      <div className="buttons">
        <div className="row">
          {renderButton('C')}
          {renderButton('/')}
          {renderButton('*')}
          {renderButton('-')}
        </div>
        <div className="row">
          {renderButton('7')}
          {renderButton('8')}
          {renderButton('9')}
          {renderButton('+')}
        </div>
        <div className="row">
          {renderButton('4')}
          {renderButton('5')}
          {renderButton('6')}
          {renderButton('=')}
        </div>
        <div className="row">
          {renderButton('1')}
          {renderButton('2')}
          {renderButton('3')}
        </div>
        <div className="row">
          {renderButton('0')}
          {renderButton('.')}
        </div>
      </div>
    </div>
  );
};

export default App;
