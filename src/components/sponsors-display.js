import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import * as styles from './sponsors-display.module.css'

export default function SponsorsDisplay() {

  const data = useStaticQuery(graphql`
    query {
      allContentfulSponsors1 {
        edges {
          node {
            logo {
              fluid(maxHeight: 150) {
                ...GatsbyContentfulFluid
              }
            }
            website
            name
          }
        }
      }
      allContentfulSponsors2 {
        edges {
          node {
            logo {
              fluid(maxHeight: 150) {
                ...GatsbyContentfulFluid
              }
            }
            website
            name
          }
        }
      }
      allContentfulSponsors3 {
        edges {
          node {
            logo {
              fluid(maxHeight: 150) {
                ...GatsbyContentfulFluid
              }
            }
            website
            name
          }
        }
      }
      allContentfulSponsors4 {
        edges {
          node {
            logo {
              fluid(maxHeight: 150) {
                ...GatsbyContentfulFluid
              }
            }
            website
            name
          }
        }
      }
    }
  `);

  return (
      <div className={styles.container}>

        {data.allContentfulSponsors1.edges.map(edge => {
          return (
            <Link to={edge.node.website} target="_blank" rel="noreferrer">
              <Img className={styles.logo} alt={edge.node.name} fluid={edge.node.logo.fluid} />
            </Link>
          )
        })}
        {data.allContentfulSponsors2.edges.map(edge => {
          return (
            <Link to={edge.node.website} target="_blank" rel="noreferrer">
              <Img className={styles.logo} alt={edge.node.name} fluid={edge.node.logo.fluid} />
            </Link>
          )
        })}
        {data.allContentfulSponsors3.edges.map(edge => {
          return (
            <Link to={edge.node.website} target="_blank" rel="noreferrer">
              <Img className={styles.logo} alt={edge.node.name} fluid={edge.node.logo.fluid} />
            </Link>
          )
        })}
        {data.allContentfulSponsors4.edges.map(edge => {
          return (
            <Link to={edge.node.website} target="_blank" rel="noreferrer">
              <Img className={styles.logo} alt={edge.node.name} fluid={edge.node.logo.fluid} />
            </Link>
          )
        })}
      </div>
  )


}

