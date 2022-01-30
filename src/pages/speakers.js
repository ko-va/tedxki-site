import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Layout from '../components/layout'
import Container from '../components/container'

import * as styles from './speakers.module.css'

export default function SpeakersPage({ data }) {
  return (
    <Layout>
      <Container>
        <div className={styles.container}>
          <h5>
            <center>Find out more about our incredible growing speaker community!</center>
          </h5>

          <div className={styles.speakers_container}>
            {data.allContentfulSpeakersGallery.edges.map(edge => {
              return (
                <div className={styles.speaker_section} key={edge.node.id}>
                  <Img
                    className={styles.speaker_photo}
                    fluid={edge.node.photo.fluid}
                    alt={edge.node.title}
                  />
                  <div className={styles.speaker_info}>
                    <h6>{edge.node.fullName}</h6>
                    <a href={edge.node.linkedInProfileLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fas fa-camera fa-2x"/></a>
                  </div>
                </div>
              )
            })}
          </div>

          <div className={styles.container}>
            <h4>
              <Link to="/events">Stay tuned for more inspiration from 2022 event soon ></Link>
            </h4>
          </div>

        </div>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulSpeakersGallery {
      edges {
        node {
          photo {
            fluid(maxWidth: 300) {
              ...GatsbyContentfulFluid
            }
          }
          fullName
          linkedInProfileLink
        }
      }
    }
  }
`;
