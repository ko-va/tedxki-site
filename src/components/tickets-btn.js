import React from 'react'

import * as styles from './tickets-btn.module.css'
import './variables.css'
import './global.css'

export default function TicketsBtn() {

  return (
    <button className={styles.button}>
      <a href='https://fienta.com/sv/tedxki' target='blank'>
        <p>Get</p>
        <p>Your</p>
        <p>Ticket</p>
      </a>
    </button>




  )
}
