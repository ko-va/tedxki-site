import React from 'react'

import * as styles from './tickets-btn.module.css'
import './variables.css'
import './global.css'

export default function TicketsBtn() {

  return (
    <button className={styles.button}>
        <p className={styles.text}>Sold</p>
        <p className={styles.text}>Out</p>
    </button>




  )
}
