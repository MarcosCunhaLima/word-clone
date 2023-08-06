import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const Erro = ({label}) => {
  return (
    <p> {label} </p>
  )
}


function Game() {

  const [guess, setGuess] = React.useState('')
  const [erro, setErro] = React.useState(false)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (guess.length !== 5) {
      setErro(true)
    } else {
      setErro(false)
      console.log(guess)
      setGuess('')
    }
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" style={erro ? { border: '4px solid red'} : null }  type="text" value={guess} onChange={ (evt) => { setGuess(evt.target.value.toUpperCase()) }}/>
      {erro ? <Erro label={"Tamanho deve ser de exatamente 5 letras"} /> : null}
    </form>
  )
}

export default Game;
