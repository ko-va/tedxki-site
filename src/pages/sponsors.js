import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import SponsorsDisplay from '../components/sponsors-display'
import ButtonRed from '../components/button-red'

import * as styles from './sponsors.module.css'

export default function HomePage() {

  return (
    <Layout>
      <Container>

        <div className={styles.container}>
          <div>
            <h5>TEDxKI is supported by a generous community of partners.</h5>
            <p>
              We are able to present our great range of events, activities, and materials thanks to their support and commitment. We work with organisations that share our enthusiasm for progressive ideas and their potential to change the world.
            </p>
            <h4>We are currently seeking sponsors for our TEDxKI2022 event. <br />
              Please contact our finance team for more information!
            </h4>
            <div>
              <ButtonRed >
                <Link href="mailto:business@tedxki.com">Become a sponsor</Link>
              </ButtonRed>
            </div>
          </div>
        </div>

        <SponsorsDisplay />

      </Container>
    </Layout>
  );
};
