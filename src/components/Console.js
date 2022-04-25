import React, {useState} from 'react';
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';

import commands from "../commands/";

import "./Console.css"

export default function Console () {
  const [terminalLineData, setTerminalLineData] = useState([
    {type: LineType.Output, value: "Welcome!"},
    {type: LineType.Output, value: "Enter 'help' below to see available commands, a contextual menu can also be used (WIP)"},
  ]);

  function executeInput(input){
    //use commands in /src/commands
    const commandAndArgs = input.split(' ')

    if (commandAndArgs[0] === "clear") setTerminalLineData([])
    else setTerminalLineData([... terminalLineData, {type: LineType.Output, value: commands.get(commandAndArgs[0])(commandAndArgs.slice(1).join(" "))}])
  }


  return (
    <div className="container">
      <Terminal name="Yann POMIE's portfolio" colorMode={ ColorMode.Light } lineData={ terminalLineData } onInput={executeInput}/>
    </div>
  )
};