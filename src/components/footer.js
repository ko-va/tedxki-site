import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      TEDxKI {new Date().getFullYear()}.
      This independent <a href="https://www.ted.com/about/programs-initiatives/tedx-program">TEDx</a> event is operated under license from <a href="https://www.ted.com/">TED</a>.
    </div>
  </Container>
)

export default Footer
