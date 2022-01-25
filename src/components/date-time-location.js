import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import * as styles from './date-time-location.module.css'

export default function DateTimeLocation() {
  return(
    <div className={styles.container}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faCalendarAlt}/>
        <h6>May 20 <br /> 2022</h6>
      </div>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faClock}/>
        <h6>13:00 - 17:00 CET</h6>
      </div>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faMapMarkerAlt}/>
        <h6>Aula Medica <br />Stockholm</h6>
      </div>
    </div>
  )
};
