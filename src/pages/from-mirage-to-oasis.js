import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from '../components/layout'
import Container from '../components/container'

import * as styles from './from-mirage-to-oasis.module.css'


export default function EventPage({ data }) {

  return (
    <Layout>
      {data.allContentfulPassedEvent.edges.map(edge => {

        return (
          <div className="event" key={edge.node.id}>
            <Img
              className="hero-image"
              fluid={edge.node.heroImage.fluid}
              alt={edge.node.title}
            />

            <Container>
              <div className={styles.container}>

                <div className={styles.video_gallery}>
                  {data.allContentfulFromMirageToOasisVideos.edges.map(edge => {
                    return (
                      <div className={styles.video} key={edge.node.id}>
                        <div dangerouslySetInnerHTML={{__html: edge.node.markdownContent.childMarkdownRemark.html,}} />
                        <p>{edge.node.videoName}</p>
                      </div>
                    )
                  })}
                </div>

                <div className={styles.speakers}>
                  <h1>SPEAKERS</h1>
                  {data.allContentfulSpeakers.edges.map((edge, i) => {
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

                <div className={styles.container}>
                  <h1>PERFORMERS</h1>
                  <div className={styles.performers}>
                    {data.allContentfulPerformers.edges.map(edge => {
                      return (
                        <div className={styles.performer}>
                          <Img
                            className={styles.performer_photo}
                            fluid={edge.node.performersPhoto.fluid}
                            alt={edge.node.performersName}
                          />
                          <div className={styles.speaker_info}>
                            <h4>{edge.node.performersName}</h4>
                            <p>
                              {edge.node.performersBio.childMarkdownRemark.internal.content}
                            </p>
                          </div>

                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Container>

          </div>

        )
      })}
    </Layout>
  )
};

export const query = graphql`
  query {
    allContentfulPassedEvent {
      edges {
        node {
          title
          id
          heroImage {
            fluid(maxWidth: 750) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulFromMirageToOasisVideos {
      edges {
        node {
          markdownContent {
            childMarkdownRemark {
              html
            }
          }
          videoName
        }
      }
    }
    allContentfulSpeakers {
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
    allContentfulPerformers {
      edges {
        node {
          performersPhoto {
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid
            }
          }
          performersName
          performersBio {
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
