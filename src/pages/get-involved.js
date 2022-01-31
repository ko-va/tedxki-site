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

          <div className="home-page__subtitle">
            <span><Link href="mailto:contact@tedxki.com"><h6>Become a volunteer ></h6></Link></span>
          </div>

          <div className="home-page__subtitle">
            <h6><span>Nominate a <span className="span_grey">speaker</span> or a <Link href="mailto:contact@tedxki.com">performer</Link> ></span></h6>
          </div>

          <div className="home-page__subtitle">
            <h6><span className="span_grey">Join the next event's team ></span></h6>
          </div>

        </div>

      </Container>
    </Layout>
  )
};
