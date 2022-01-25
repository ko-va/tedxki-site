import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image";

import DateTimeLocation from '../components/date-time-location'

import * as styles from './upcoming-event.module.css'

export default function UpcomingEventSection() {

  const data = useStaticQuery(graphql`
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
  `);

  return (
    <div className={styles.container}>
      <div className={styles.event_info}>
        <h2>Updating old systems to new realities</h2>
        <h5>
          CTRL+R, the symbol for refreshing <br/>
          How often have you been stuck on a page and had to restart your browser? We've all been there. <br/>
        </h5>
        <h4>
          But what if we're stuck in reality?
        </h4>
        <p>
          Today more than ever, we are aware that sometimes we need to <span>#reload</span>, <span>#recharge</span>
          or <span>#refresh</span> our lives, environment, and system. <br/>We are stuck between global crises like the
          pandemic, recession and climate change. <br/>But, we are also in control of updating old systems to new realities!
        </p>
        <p>
          Let's have a <span>#realtalk</span> about how we can create new beginnings and reinvent ourselves.<br />
          With our brilliant speakers, dive in and hear stories that show true power and faith to <span>#reload</span>,
          <span>#recharge</span>, and <span>#refresh</span>.
        </p>

        <DateTimeLocation />
      </div>

      <div className={styles.speakers_container}>

          <h1>SPEAKERS</h1>
          {data.allContentfulCtrlRSpeakers.edges.map((edge, i) => {
            return (
              <div className={styles.speaker} style={{ direction: i%2 === 0 ? 'ltr' : 'rtl' }}>
                <Img
                  className={styles.speaker_photo}
                  fluid={edge.node.speakersPhoto.fluid}
                  alt={edge.node.speakersName}
                />
                <div className={styles.speaker_info} style={{ direction: 'ltr' }}>
                  <h4>{edge.node.speakersName}</h4>
                  <p>
                    {edge.node.speakersBio.childMarkdownRemark.internal.content}
                  </p>
                </div>

              </div>
            )
          })}
      </div>
    </div>
  )

};
