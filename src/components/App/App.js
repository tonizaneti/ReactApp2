import React from 'react';

import Instructions from '../Instructions/Instructions.js';

import './App.css';

const displayEmojiName =event=>alert(event.target.id);
const emojis = 
[
  {
  emoji:'😀',
  name: "teste sorriso face"
  },
  {
    emoji:'🎉',
    name: "festa comemoração"
  },
  {
    emoji:'💃',
    name: "mulher dançando"
  }
];

function App()
{
  const greeting = "greeting";
  const displayAction = false;
  return(
    <div className = "container">
      <h1 id={greeting}>Nosso Click.com</h1>
      {displayAction && <p>Eu estou escrevendo JSX</p>}
      <Instructions />
      <ul>{
          emojis.map(emoji=>(
            <li key={emoji.name}
            ><button
                onClick={displayEmojiName}
                >
              <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
}
      </ul>
    </div>
  )
}
export default App;