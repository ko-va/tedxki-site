import React from "react"
import { graphql, Link } from 'gatsby'
import { Parallax } from "react-parallax";
import Img from "gatsby-image"
import Layout from '../components/layout'

import Container from '../components/container'
import DateTimeLocation from '../components/date-time-location'
import ButtonRed from '../components/button-red'
import ButtonWhite from '../components/button-white'
import TicketsBtn from '../components/tickets-btn'


import * as styles from './index.module.css'

import image1 from "../../static/images/hero.jpg"
import image2 from "../../static/images/bckgrnd.svg"

export default function HomePage({ data }) {

  return (
  <Layout>
    <div  className={styles.hero_image}>
      <Parallax bgImage={image1} strength={200}>
        <div style={{ height: 700 }} />
      </Parallax>
    </div>

      <Parallax bgImage={image2} strength={200}>
      <Container>
        <div className={styles.container}>
          <div className={styles.section}>
            <div className={styles.intro}>
              <h5 className={styles.coming_up}>
                <span>COMING UP</span>
              </h5>
              <TicketsBtn style={{ position: 'sticky' }}/>
            </div>
            <div className={styles.event_title}>
              <h1 className="upcoming-event__title">
                CTRL+R:
              </h1>
              <h2 className={styles.subtitle}>Updating old systems to new realities</h2>
            </div>
            <DateTimeLocation />
            <div>
              <h4>
                CTRL+R, the symbol for refreshing: <br />How often have you been stuck on a page and had to restart your browser? We've all been there.
              </h4>
              <p>
                But what if we're stuck in reality?<br />Today more than ever, we are aware that sometimes we need to <span><Link to="https://www.instagram.com/p/CZRVKKIMhqL/" target="_blank" rel="noreferrer">#reload</Link></span>, <span><Link to="https://www.instagram.com/p/CZzp1QzFmD5/" target="_blank" rel="noreferrer">#recharge</Link></span> or <span><Link to="https://www.instagram.com/p/CZ7U_4bgw9h/" target="_blank" rel="noreferrer">#refresh</Link></span> our lives, environment, and system. We are stuck between global crises like the pandemic, recession and climate change. But, we are also in control of updating old systems to new realities!
              </p>
              <p>
                Let's have a <span>#realtalk</span> about how we can create new beginnings and reinvent ourselves.<br />With our brilliant speakers, dive in and hear stories that show true power and faith to <span><Link to="https://www.instagram.com/p/CZRVKKIMhqL/" target="_blank" rel="noreferrer">#reload</Link></span>, <span><Link to="https://www.instagram.com/p/CZzp1QzFmD5/" target="_blank" rel="noreferrer">#recharge</Link></span>, and <span>#refresh</span>.
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
                      <p><Link to={edge.node.linkedInProfileLink} target="_blank" rel="noreferrer">{edge.node.speakersName}</Link></p>
                      <p className={styles.job_title}>{edge.node.jobTitle}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className={styles.btn_container}>
              <ButtonWhite>
                <Link to="/events">See More</Link>
              </ButtonWhite>
            </div>

          </div>
        </div>
        </Container>
      </Parallax>

        <Container>
        <div className={styles.container}>
          <div>
            <h1>
              About us
            </h1>
            <h4>
              TEDxKI is a platform for the propagation of Swedish ideas, creativity and innovation to the rest of the world.
            </h4>
            <p>
              <span>TEDxKI</span> is a volunteer-run, non-profit organisation founded back in 2020.
              We are an international team of 25 passionate people with diverse backgrounds in design,
              innovation, marketing, finance, NGOs, business, and health. Our mission is to find and present the most
              exciting and original ideas that transcend limitations, classifications, and boundaries to create a
              better society. Through out the year we strive to deliver high quality content and inspire you for new
              beginnings.
            </p>
          </div>
          <div>
            <h3 className="subtitle about-us__subtitle">What is TEDx?</h3>
            <p>
              In the spirit of ideas worth spreading, <span>TED</span> has created a program called TEDx. <span>TEDx</span> is a program of local, self-organized events that bring people together to share a
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
                <Link to="/get-involved">Get Involved</Link>
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
          jobTitle
          speakersName
          speakersBio {
            childMarkdownRemark {
              internal {
                content
              }
            }
          }
          linkedInProfileLink
        }
      }
    }
  }
`
