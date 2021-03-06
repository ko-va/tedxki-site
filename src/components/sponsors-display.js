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
              fluid(maxHeight: 300) {
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
      allContentfulTeamGoodieBag1 {
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
      allContentfulTeamGoodieBag2 {
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
      allContentfulTeamGoodieBag3 {
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
      allContentfulTeamGoodieBag4 {
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
      allContentfulTeamGoodieBag5 {
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
      <div>
        <div className={styles.container1}>
          {data.allContentfulSponsors1.edges.map(edge => {
            return (
              <Link to={edge.node.website} target="_blank" rel="noreferrer">
                <Img className={styles.logo} alt={edge.node.name} fluid={edge.node.logo.fluid} />
              </Link>
            )
          })}
        </div>

        <div className={styles.container2}>
          {data.allContentfulSponsors2.edges.map(edge => {
            return (
              <Link to={edge.node.website} target="_blank" rel="noreferrer">
                <Img className={styles.logo} alt={edge.node.name} fluid={edge.node.logo.fluid} />
              </Link>
            )
          })}
        </div>

        <div className={styles.container3}>
          {data.allContentfulSponsors3.edges.map(edge => {
            return (
              <Link to={edge.node.website} target="_blank" rel="noreferrer">
                <Img className={styles.logo} alt={edge.node.name} fluid={edge.node.logo.fluid} />
              </Link>
            )
          })}
        </div>

        <div className={styles.container4}>
          {data.allContentfulTeamGoodieBag1.edges.map(edge => {
            return (
              <Link to={edge.node.website} target="_blank" rel="noreferrer">
                <Img className={styles.logo} alt={edge.node.name} fluid={edge.node.logo.fluid} />
              </Link>
            )
          })}
          {data.allContentfulTeamGoodieBag2.edges.map(edge => {
            return (
              <Link to={edge.node.website} target="_blank" rel="noreferrer">
                <Img className={styles.logo} alt={edge.node.name} fluid={edge.node.logo.fluid} />
              </Link>
            )
          })}
          {data.allContentfulTeamGoodieBag3.edges.map(edge => {
            return (
              <Link to={edge.node.website} target="_blank" rel="noreferrer">
                <Img className={styles.logo} alt={edge.node.name} fluid={edge.node.logo.fluid} />
              </Link>
            )
          })}
          {data.allContentfulTeamGoodieBag4.edges.map(edge => {
            return (
              <Link to={edge.node.website} target="_blank" rel="noreferrer">
                <Img className={styles.logo} alt={edge.node.name} fluid={edge.node.logo.fluid} />
              </Link>
            )
          })}
          {data.allContentfulTeamGoodieBag5.edges.map(edge => {
            return (
              <Link to={edge.node.website} target="_blank" rel="noreferrer">
                <Img className={styles.logo} alt={edge.node.name} fluid={edge.node.logo.fluid} />
              </Link>
            )
          })}
        </div>
      </div>
  )


}

