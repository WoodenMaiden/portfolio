import React, {useState} from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

import commands from "../commands/";

import "./Console.css"

export default function Console () {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Hello there 👋! Welcome to my portfolio.</TerminalOutput>,
    <TerminalOutput>Enter 'help' below to see available commands.</TerminalOutput>,
  ]);

  function executeInput(input){
    const commandAndArgs = input.trim().split(' ')
    commandAndArgs[0] = commandAndArgs[0].toLowerCase()

    if (commandAndArgs[0] === "clear") setTerminalLineData([])
    else if (!commands.has(commandAndArgs[0])) setTerminalLineData([...terminalLineData, ...[
      <TerminalOutput>{'$ ' + input}</TerminalOutput>,
      <TerminalOutput>❌ Not such command</TerminalOutput>,
    ]])
    else setTerminalLineData([...terminalLineData, ...[
      <TerminalOutput>{'$ ' + input}</TerminalOutput>,
      <TerminalOutput>{commands.get(commandAndArgs[0])(commandAndArgs.slice(1).join(" "))}</TerminalOutput>
    ]])
  }


  return (
    <div className="container">
      <Terminal name="Yann POMIE's portfolio" colorMode={ ColorMode.Light } lineData={ terminalLineData } onInput={executeInput}/>
    </div>
  )
};