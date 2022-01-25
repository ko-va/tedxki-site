import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image";

import * as styles from './past-events.module.css'

export default function PastEventsSection() {

  const data = useStaticQuery(graphql`
    query {
      allContentfulFromMirageToOasis {
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
  `);

  return (
    <div className={styles.container}>
      <h2>PAST EVENTS</h2>
      {data.allContentfulFromMirageToOasis.edges.map(edge => {
        return (
          <div className={styles.events} key={edge.node.id}>
            <Img
              className="hero-image"
              fluid={edge.node.heroImage.fluid}
              alt={edge.node.title}
            />
            <Link  to="/from-mirage-to-oasis">
              <h6>Watch 2021 Event ></h6>
            </Link>
          </div>
        )
      })}
    </div>
  )
};
