import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const OrateurPage = ({ data }) => (
  <Layout>
    <h1>Orateurs</h1>
    <p>Liste des orateurs</p>
    <ul>
      {data.allStrapiOrateur.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.nom + " " + document.node.prenom}</Link>
          </h2>
          <p>{document.node.mail}</p>
          <p>{document.node.presentation}</p>
        </li>
      ))}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default OrateurPage

export const pageQuery = graphql`  
  query OrateurPage {
    allStrapiOrateur {
      edges {
        node {
          id
          nom
          prenom
          mail
          presentation
        }
      }
    }
  }
`