import React from "react";

import Layout from '../components/layout'
import Container from '../components/container'

import * as styles from './about.module.css'

export default function AboutPage() {

  return (
    <Layout>
      <Container>

        <div className={styles.container}>
          <div>
            <h1 className="home-page__title">
              About us
            </h1>

            <h3 className="home-page__prefix">
              <span>TEDxKI</span> is a platform for the propagation of Swedish ideas, creativity and innovation to the rest of the world.
            </h3>
            <p>
              <span>TEDxKI</span> was founded in 2020, to share ideas worth spreading and inspire the local community even in the middle of
              the pandemic. This year, as we are gradually getting how to cope with these new standards, we aim to organize and
              carry out the second TEDxKI to inspire society and provide new alternatives on how to keep hope alive and make dreams a
              reality - especially during hard times. We are an international team of 25 curious and passionate humans who work together
              to find the most exciting and original ideas that transcend limitations, classifications, and boundaries to create a
              society we all want to live in.
            </p>

            <h4 className="home-page__subtitle">About <span>TEDx</span>, x = independently organized event</h4>
            <p>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring
              people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine
              to spark deep discussion and connection. These local, self-organized events are branded TEDx,
              where x = independently organized TED event. The TED Conference provides general guidance for the TEDx
              program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
            </p>

            <h4 className="home-page__subtitle">About <span>TED</span></h4>
            <p>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in
              California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual
              TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of
              these talks are then made available, free, at TED.com. TED speakers have included <span className={styles.bold}>Bill Gates</span>, <span className={styles.bold}>Jane Goodall</span>, <span className={styles.bold}>BElizabeth Gilbert</span>, <span className={styles.bold}>Sir Richard Branson</span>, <span className={styles.bold}>Nandan Nilekani</span>, <span className={styles.bold}>Philippe Starck</span>, <span className={styles.bold}>Ngozi Okonjo-Iweala</span>, <span className={styles.bold}>Sal Khan</span>, and <span className={styles.bold}>Daniel Kahneman</span>.
            </p>
            <p>The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives
              include TED.com, where new TED Talks are posted daily. TED Translators, which provides subtitles and
              interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed.
              TED has established The Audacious Project that takes a collaborative approach to funding ideas with the
              potential to create change at thrilling scale. TEDx, which supports individuals or groups in hosting local,
              self- organized TED-style events around the world, and the TED Fellows program, helping world-changing
              innovators from around the globe to amplify the impact of their remarkable projects and activities.
            </p>
            <br />
            <p>Follow TED on <a href="http://twitter.com/TEDTalks" target="_blank" rel="noreferrer">
              <span>Twitter</span></a> and <a href="http://www.facebook.com/TED" target="_blank" rel="noreferrer">
              <span>Facebook</span></a>
            </p>

          </div>
        </div>

      </Container>
    </Layout>
  )
};
