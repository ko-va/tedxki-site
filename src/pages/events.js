import React from "react"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import UpcomingEventSection from '../components/upcoming-event'
import PastEventsSection from '../components/past-events'

export default function HomePage({ data }) {

  return (
    <Layout>
      <div>
        {data.allContentfulCtrlR.edges.map(edge => {
          return (
            <div className="event" key={edge.node.id}>
              <Img
                fluid={edge.node.heroImage.fluid}
                alt={edge.node.title}
              />
            </div>
          )
        })}
      </div>
      <Container>
        <UpcomingEventSection />
        <hr/>
        <PastEventsSection />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulCtrlR {
      edges {
        node {
          heroImage {
            fluid(maxWidth: 750) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
