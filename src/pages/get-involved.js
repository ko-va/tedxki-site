import React from "react";
import { Link } from "gatsby";

import Layout from '../components/layout'
import Container from '../components/container'

import * as styles from './get-involved.module.css'

export default function GetInvolvedPage() {

  return (
    <Layout>
      <Container>

        <div className={styles.container}>
          <h1>
            We need you!
          </h1>

          <h4>
            Anyone can get involved with the TEDxKI community and there are numerous ways to do that.
            From contributing to the organization of the event and volunteering during this sharing of ideas to
            nominating a friend or becoming the next speaker, you can help create a stimulating day of inspiration!
          </h4>

          <Link href="mailto:contact@tedxki.com">
            <h6 className="home-page__subtitle"><span>Become a volunteer ></span></h6>
          </Link>
          <Link to="mailto:contact@tedxki.com">
            <h6 className="home-page__subtitle"><span>Nominate a speaker or a performer ></span></h6>
          </Link>
          <Link href="mailto:contact@tedxki.com">
            <h6 className="home-page__subtitle"><span>Join the next events team ></span></h6>
          </Link>
        </div>

      </Container>
    </Layout>
  )
};
