import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const ThemePage = ({ data }) => (
  <Layout>
    <h1>Themes</h1>
    <p>Liste des themes</p>
    <ul>
      {data.allStrapiTheme.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.titre}</Link>
          </h2>
          <p>{document.node.description}</p>
          <Img fixed={document.node.image.childImageSharp.fixed}/>    
        </li>
      ))}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThemePage

export const pageQuery = graphql`  
  query ThemePage {
    allStrapiTheme {
      edges {
        node {
          id
          titre
          description
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`