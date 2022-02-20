import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import * as styles from './sponsors-display.module.css'

export default function SponsorsDisplay() {

  const data = useStaticQuery(graphql`
    query {
      allContentfulSponsorsPage {
    edges {
      node {
        internal {
          content
          description
          ignoreType
          mediaType
        }
        parent {
          id
          children {
            id
            ... on File {
              id
              childImageSharp {
                fluid {
                  base64
                }
              }
            }
          }
        }
      }
    }
  }
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

  console.log(data.allContentfulSponsorsPage)

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

