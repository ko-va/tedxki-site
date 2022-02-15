import React from 'react'

import * as styles from './tickets-btn.module.css'
import './variables.css'
import './global.css'

export default function TicketsBtn() {

  return (
    <button className={styles.button}>
      <a href='https://fienta.com/sv/tedxki' target='blank'>
        <p className={styles.text}>Get</p>
        <p className={styles.text}>Your</p>
        <p className={styles.text}>Ticket</p>
      </a>
    </button>




  )
}
