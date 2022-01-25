import React from "react"
import { graphql, Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";
import Img from "gatsby-image"
import Layout from '../components/layout'
import Container from '../components/container'
import DateTimeLocation from '../components/date-time-location'
import ButtonRed from '../components/button-red'
import ButtonWhite from '../components/button-white'

import * as styles from './index.module.css'

export default function HomePage({ data }) {

  return (
    <Layout>
      <StaticImage src="../../static/images/hero.jpg" alt="hero-image" className={styles.hero_image} />
      <Container>
        <div className={styles.container}>
          <div className={styles.section}>
            <div>
              <h1 className="upcoming-event__title">
                CTRL+R:
              </h1>
              <h2>Updating old systems to new realities</h2>
            </div>
            <DateTimeLocation />
            <div>
              <h4>
                CTRL+R, the symbol for refreshing - <br />How often have you been stuck on a page and had to restart your browser? We've all been there.
              </h4>
              <p>
                But what if we're stuck in reality?<br />
                Today more than ever, we are aware that sometimes we need to <span>#reload</span>, <span>#recharge</span>
                or <span>#refresh</span> our lives, environment, and system. We are stuck between global crises like the
                pandemic, recession and climate change. But, we are also in control of updating old systems to new realities!
              </p>
              <p>
                Let's have a <span>#realtalk</span> about how we can create new beginnings and reinvent ourselves.<br />
                With our brilliant speakers, dive in and hear stories that show true power and faith to <span>#reload</span>,
                <span>#recharge</span>, and <span>#refresh</span>.
              </p>
            </div>
          </div>
          <div className={styles.section}>
            <h2>Speakers</h2>
            <div className={styles.speakers_section}>
              {data.allContentfulCtrlRSpeakers.edges.map(edge => {
                return (
                  <div className={styles.speaker}>
                    <Img
                      className={styles.speaker_photo}
                      fluid={edge.node.speakersPhoto.fluid}
                      alt={edge.node.speakersName}
                    />
                    <div>
                      <p>{edge.node.speakersName}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className={styles.btn_container}>
              <ButtonWhite>
                <Link to="/events">Events</Link>
              </ButtonWhite>

              <ButtonWhite>
                <Link to="/speakers"className="white-button">Speakers</Link>
              </ButtonWhite>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div>
            <h1>
              About us
            </h1>
            <h4>
              TEDxKI is a platform for the propagation of Swedish ideas, creativity and innovation to the rest of the world.
            </h4>
            <p>
              <span>TEDxKI</span> is a volunteer-run, non-profit organisation founded back in 2019.
              We are an international team of 27 passionate people with diverse backgrounds in design,
              innovation, marketing, finance, NGOs, business, and health. Our mission is to find and present the most
              exciting and original ideas that transcend limitations, classifications, and boundaries to create a
              better society. Through out the year we strive to deliver high quality content and inspire you for new
              beginnings.
            </p>
          </div>
          <div>
            <h3 className="subtitle about-us__subtitle">What is TEDx?</h3>
            <p>
              In the spirit of ideas worth spreading, <span>TED</span> has created a program called TEDx.
              <span>TEDx</span> is a program of local, self-organized events that bring people together to share a
              TED-like experience. Our event is called TEDxKI, where <span>x = independently organized TED event</span>.
            </p>
            <p>
              TED Talks video and live speakers will combine to spark deep discussion and connection in a small group.
              The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including
              ours, are self-organized.
            </p>
          </div>
          <div>
            <ButtonWhite>
              <Link to="/about" onClick={()=>console.log('button hit')}>About</Link>
            </ButtonWhite>
          </div>
        </div>

        <hr/>

        <div  className={styles.container}>
          <div className={styles.getinvolved}>
            <div>
              <ButtonRed >
                <Link to="/getinvolved">Get Involved</Link>
              </ButtonRed>

            </div>
            <h3>
              Do you want to be a part of our TEDxKI team?
            </h3>
          </div>
        </div>

      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulCtrlRSpeakers {
      edges {
        node {
          speakersPhoto {
            fluid(maxWidth: 317) {
              ...GatsbyContentfulFluid
            }
          }
          speakersName
          speakersBio {
            childMarkdownRemark {
              internal {
                content
              }
            }
          }
        }
      }
    }
  }
`
