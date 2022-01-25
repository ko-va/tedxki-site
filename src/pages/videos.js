import React from "react";
import { graphql } from "gatsby";

import Layout from '../components/layout'
import Container from '../components/container'

import * as styles from './videos.module.css'

export default function VideosPage({ data }) {
  return (
    <Layout>
      <Container>
      <div className={styles.container}>
        <h5>
          Watch out! The next is here to come:
        </h5>
        <div className={styles.video_gallery}>
          {data.allContentfulVideoEmbeded.edges.map(edge => {
            return (
              <div className={styles.video} key={edge.node.id}>
                <div dangerouslySetInnerHTML={{__html: edge.node.markdownContent.childMarkdownRemark.html,}} />
                <p>{edge.node.videoName}</p>
              </div>
            )
          })}
        </div>
      </div>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulVideoEmbeded {
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
  }

`;
