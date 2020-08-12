import React from 'react'
import YedTerminal from "yed-terminal"
import 'yed-terminal/dist/index.css'
import './app.css'
const App = () => {
  return <div className={"app"}>
    <YedTerminal terminalType={"Windows"} terminalTitle={"Terminal"} terminalLogs={[{label:'Merhaba'},{label: "Yasin Efem Dalkılıç"}]} />
  </div>
}

export default App
