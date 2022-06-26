import React, {useState} from 'react';
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';

import commands from "../commands/";

import "./Console.css"

export default function Console () {
  const [terminalLineData, setTerminalLineData] = useState([
    {type: LineType.Output, value: "Hello there 👋! Welcome to my portfolio."},
    {type: LineType.Output, value: "Enter 'help' below to see available commands."},
  ]);

  function executeInput(input){
    const commandAndArgs = input.trim().split(' ')
    commandAndArgs[0] = commandAndArgs[0].toLowerCase()

    if (commandAndArgs[0] === "clear") setTerminalLineData([])
    else if (!commands.has(commandAndArgs[0])) setTerminalLineData([...terminalLineData, ...[
      {type: LineType.Output, value: '$ ' + input},
      {type: LineType.Output, value: "❌ Not such command"},
    ]])
    else setTerminalLineData([...terminalLineData, ...[
      {type: LineType.Output, value: '$ ' + input},
      {type: LineType.Output, value: commands.get(commandAndArgs[0])(commandAndArgs.slice(1).join(" "))}
    ]])
  }


  return (
    <div className="container">
      <Terminal name="Yann POMIE's portfolio" colorMode={ ColorMode.Light } lineData={ terminalLineData } onInput={executeInput}/>
    </div>
  )
};