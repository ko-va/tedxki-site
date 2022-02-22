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
            <span className={styles.not_active}><h6>{/*<Link to="https://forms.gle/q3EBzJq4U5ugTnLL7" target="_blank">*/}Become a volunteer >{/*</Link>*/}</h6></span>
            <p>
              Fantastic that you would like to volunteer for TEDxKI and contribute to the community! Helpers are people from the KI community who provide additional support on the day of the event. Anyone can volunteer, and opportunities will be announced a few weeks before the event. Helpers are essential in smoothly organizing the event by helping team members and inspiring guests with enthusiasm.
            </p>
          </div>

          <div className="home-page__subtitle">
            <span className={styles.not_active}><h6>Nominate a speaker or a performer ></h6></span>
            <p>
              Our speaker and performer lineup for our 2022 event is currently complete. Please follow us on our social media for updates on future events’ speaker and performer recruitment.
            </p>
          </div>

          <div className="home-page__subtitle">
            <span className={styles.not_active}><h6>Join the next event's team ></h6></span>
            <p>
              Positions on the teams become available each year and as needed. Stay tuned for upcoming team recruitment in fall 2022. <br />
              Depending on your experience and skills, there may be a team where you can contribute the most. We are looking for passionate people about TED, who have experience organizing events/activities/groups, and working in a multicultural environment.

            </p>
          </div>

        </div>

      </Container>
    </Layout>
  )
};
