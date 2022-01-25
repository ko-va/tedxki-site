import React from 'react'

import * as styles from './button-red.module.css'
import './variables.css'
import './global.css'

export default function ButtonRed({ children }) {

  return (
    <button className={styles.button} onClick={()=>console.log('button hit')}>
      {children}
    </button>
  )
}

