import * as React from 'react'
import { useEffect } from 'react'
import styles from './styles.module.css'

interface propTypes {
  terminalTitle?: string,
  terminalHeight?: number | string
  terminalLogs: Array<{ label: any }>
}



const YedTerminal = (props: propTypes) => {
  const renderTerminalBody = ():any => {
    if (props.terminalLogs.length !== 0) {
      let text = ""
      return props.terminalLogs.map((item, index) => {
        if (item.label) {
          text = item.label
        }
        return <p key={index}>{text}</p>
      })
    }
  }
  useEffect(() => {
    var objDiv:any = document.querySelector("."+styles.yedTerminal)
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [])
  return (
    <div className={styles.terminalWrapper}>
      <div className={styles.yedTerminalWindow}>
        <i className={styles.yedClose}></i>
        <i className={styles.yedResize}></i>
        <i className={styles.yedMinimize}></i>
        <p> {props.terminalTitle ? props.terminalTitle : null}</p>
      </div>
      <div className={styles.yedTerminalBody}
           style={{height: props.terminalHeight ? props.terminalHeight + "px" : "400px"}}>
        <div className={styles.yedTerminal}>
          {renderTerminalBody()}
          <div className={styles.yedTerminalEnd}>'</div>
        </div>
      </div>
    </div>
  )
}
export default YedTerminal
