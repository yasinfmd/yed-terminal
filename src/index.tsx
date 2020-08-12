import * as React from 'react'
import { useEffect } from 'react'
import styles from './styles.module.css'

interface propTypes {
  terminalTitle?: string
  terminalHeight?: number | string
  terminalLogs: Array<{ label: any }>
  terminalType: 'Windows' | 'Mac'
  terminalTextColor?: string
}


const YedTerminal = (props: propTypes) => {
  const renderTerminalBody = (): any => {
    if (props.terminalLogs.length !== 0) {
      let text = ''
      return props.terminalLogs.map((item, index) => {
        if (item.label) {
          text = item.label
        }
        return <p key={index}>{text}</p>
      })
    }
  }
  useEffect(() => {
    var objDiv: any = document.querySelector('.'+styles.yedTerminal)
    objDiv.scrollTop = objDiv.scrollHeight
  }, [])
  const renderWindows = () => {
    return (
      <div className={styles.yedWindowsWrapper}>
        <div className={styles.yedTerminalWindowsWindow}>
          <p> {props.terminalTitle ? props.terminalTitle : null}</p>
          <div className={styles.yedTerminalWindowIcons}>
            <div className={styles.yedWindowsIcon}>
              <div className={styles.yedTerminalMinimize}>
                <SvgMinimize/>
              </div>
            </div>
            <div className={styles.yedWindowsIcon}>
              <div className={styles.yedTerminalUppersize}>
                <SvgSquare/>
              </div>
            </div>
            <div className={styles.yedWindowsIcon}>
              <div className={styles.yedTerminalClose}>
                <SvgClose/>
              </div>
            </div>


          </div>
        </div>
        <div className={styles.yedTerminalBody}
             style={{
               height: props.terminalHeight ? props.terminalHeight + 'px' : '400px',
               color: props.terminalTextColor ? props.terminalTextColor : '#8ab4f8'
             }}>
          <div className={styles.yedTerminal}>
            {renderTerminalBody()}
            <div className={styles.yedTerminalEnd}>'</div>
          </div>
        </div>
      </div>
    )
  }
  const renderMac = () => {
    return (
      <div className={styles.terminalWrapper}>
        <div className={styles.yedTerminalWindow}>
          <i className={styles.yedClose}></i>
          <i className={styles.yedResize}></i>
          <i className={styles.yedMinimize}></i>
          <p> {props.terminalTitle ? props.terminalTitle : null}</p>
        </div>
        <div className={styles.yedTerminalBody}
             style={{
               height: props.terminalHeight ? props.terminalHeight + 'px' : '400px',
               color: props.terminalTextColor ? props.terminalTextColor : '#8ab4f8'
             }}>
          <div className={styles.yedTerminal}>
            {renderTerminalBody()}
            <div className={styles.yedTerminalEnd}>'</div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <React.Fragment>
      {props.terminalType === 'Windows' ? renderWindows() : renderMac()}
    </React.Fragment>
  )
}
export default YedTerminal

const SvgClose = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
         className="feather feather-x">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )
}

const SvgMinimize = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
         className="feather feather-minus">
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  )
}

const SvgSquare = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
         className="feather feather-square">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    </svg>
  )
}
