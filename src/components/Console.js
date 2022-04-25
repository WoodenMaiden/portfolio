import React, {useState} from 'react';
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';

import "./Console.css"

export default function Console () {
  const [terminalLineData, setTerminalLineData] = useState([
    {type: LineType.Output, value: "Welcome to Yann POMIE's portfolio"},
    {type: LineType.Input, value: 'Some previous input received'},
  ]);
  // Terminal has 100% width by default so it should usually be wrapped in a container div

  function executeInput(e){
    //use commands in /src/commands

  }


  return (
    <div className="container">
      <Terminal name='React Terminal Usage Example' colorMode={ ColorMode.Light } lineData={ terminalLineData } onInput={executeInput}/>
    </div>
  )
};