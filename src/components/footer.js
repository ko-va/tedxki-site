import React from 'react'
import { Link } from "gatsby";

import Container from './container'
import SocialIcons from './social-media'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <div className={styles.item1}>
        <div className="contact-us__form sub-item sub-item-1">
          <p>Contact Us</p>
          <Link to="mailto:contact@tedxki.com"><span>contact@tedxki.com</span></Link>
        </div>

        <div className="social-icons__section sub-item sub-item-2">
          <p>Follow</p>
          <SocialIcons />
        </div>
      </div>

      <div className={styles.item2}>
        <Link to="/sponsors"><span>Are you our new Sponsor? ></span></Link>
      </div>

      <div className={styles.item3}>
        TEDxKI {new Date().getFullYear()}.
        This independent <a href="https://www.ted.com/about/programs-initiatives/tedx-program">TEDx</a> event is operated under license from <a href="https://www.ted.com/">TED</a>.
      </div>
    </div>
  </Container>
)

export default Footer
