import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare, faFacebookSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import * as styles from './social-media.module.css'

export default function SocialIcons() {

  return(
    <div className={styles.social_icons}>
      <a href="https://www.instagram.com/tedxki/?hl=en" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagramSquare} className="fas fa-camera fa-3x" /></a>
      <a href="https://www.facebook.com/tedxki/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookSquare} className="fas fa-camera fa-3x" /></a>
      <a href="https://www.linkedin.com/company/tedxki/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fas fa-camera fa-3x" /></a>
    </div>

  )
};
