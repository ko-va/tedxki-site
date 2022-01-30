import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import * as styles from './date-time-location.module.css'

export default function DateTimeLocation() {
  return(
    <div className={styles.container}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faCalendarAlt} className="fas fa-camera fa-2x"/>
        <h6>May 18 <br /> 2022</h6>
      </div>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faClock} className="fas fa-camera fa-2x" />
        <h6>13:00 - 17:00 CET</h6>
      </div>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="fas fa-camera fa-2x" />
        <h6>Aula Medica <br />Stockholm</h6>
      </div>
    </div>
  )
};
