import React, { useState } from 'react';

function GuessControl({ onGuess }) {
    
  const [currentGuess, setCurrentGuess] = useState('');

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  const onSubmitGuess = () => {
    if (currentGuess.trim() !== '') {
      onGuess(Number(currentGuess));
      setCurrentGuess('');
    }
  };

  return (
    <div>
      <label>
        Enter Your Guess:
        <input type="text" value={currentGuess} onChange={handleInputChange} />
      </label>
      <button onClick={onSubmitGuess}>Submit Guess</button>
    </div>
  );
}

export default GuessControl;
