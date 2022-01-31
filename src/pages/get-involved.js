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
            <h6><span><Link href="mailto:contact@tedxki.com">Become a volunteer ></Link></span></h6>
            <p>
              Fantastic that you would like to volunteer for TEDxKI and contribute to the community! Helpers are people from the KI community who provide additional support on the day of the event. Anyone can volunteer, and opportunities will be announced a few weeks before the event. Helpers are essential in smoothly organizing the event by helping team members and inspiring guests with enthusiasm.
            </p>
          </div>

          <div className="home-page__subtitle">
            <span><h6>Nominate a speaker or a <Link href="#">performer ></Link></h6></span>
          </div>

          <div className="home-page__subtitle">
            <span><h6>Join the next event's team ></h6></span>
            <p>
              Positions on the teams become available each year and as needed. <br />
              Depending on your experience and skills, there may be a team where you can contribute the most. We are looking for passionate people about TED, who have experience organizing events/activities/groups, and working in a multicultural environment.

            </p>
          </div>

        </div>

      </Container>
    </Layout>
  )
};
