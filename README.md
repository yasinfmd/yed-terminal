# yed-terminal

> yed-terminal

[![NPM](https://img.shields.io/npm/v/yed-terminal.svg)](https://www.npmjs.com/package/yed-terminal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save yed-terminal
```
## Demo
[Demo](https://yed-terminal.vercel.app/)




## Usage

```tsx
import React from 'react'
import YedTerminal from "yed-terminal"
import 'yed-terminal/dist/index.css'
import './app.css'
const App = () => {
  return <div className={"app"}>
    <YedTerminal terminalType={"Mac"} terminalLogs={[{label:'Merhaba'},{label: "Yasin Efem Dalkılıç"}]} />
  </div>
}

export default App

```
# Props
 Props Name | Description | Default Value | Required
 :---:  |  :----: | :---:| :---: |
  terminalTitle | Terminal Header | null | false
  terminalLogs | Terminal Content | array | true
  terminalHeight | Terminal Height| 400px | false
  terminalType | Terminal Type| null | true (Mac or Windows)
  terminalTextColor | Terminal Text Color | #8ab4f8 | false




#Preview Mac Terminal

<img src="https://raw.githubusercontent.com/yasinfmd/yed-terminal/master/terminal.png" width="600" height="200">

#Preview Windows Terminal
<img src="https://raw.githubusercontent.com/yasinfmd/yed-terminal/master/windowsterminal.png" width="600" height="200">


## License

MIT © [yasinfmd](https://github.com/yasinfmd)
