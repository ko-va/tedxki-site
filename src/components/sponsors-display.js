import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import * as styles from './sponsors-display.module.css'

export default function SponsorsDisplay() {

  const data = useStaticQuery(graphql`
    query {
      allContentfulSponsors {
        edges {
          node {
            sponsorsLogo {
              fluid(maxHeight: 150) {
                ...GatsbyContentfulFluid
              }
            }
            sponsorsWebsite
            sponsorsName
          }
        }
      }
    }
  `);

  return (
      <div className={styles.container}>
        {data.allContentfulSponsors.edges.map(edge => {
          return (
            <Link to={edge.node.sponsorsWebsite} target="_blank" rel="noreferrer">
              <Img className={styles.logo} alt={edge.node.sponsorsName} fluid={edge.node.sponsorsLogo.fluid} />
            </Link>
          )
        })}
      </div>
  )


}

