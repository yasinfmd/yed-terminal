# yed-terminal

> yed-terminal

[![NPM](https://img.shields.io/npm/v/yed-terminal.svg)](https://www.npmjs.com/package/yed-terminal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save yed-terminal
```
## Demo


## Usage

```tsx
import React from 'react'
import YedTerminal from "yed-terminal"
import 'yed-terminal/dist/index.css'
import './app.css'
const App = () => {
  return <div className={"app"}>
    <YedTerminal terminalLogs={[{label:'Merhaba'},{label: "Yasin Efem Dalkılıç"}]} />
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

#Preview


## License

MIT © [yasinfmd](https://github.com/yasinfmd)
