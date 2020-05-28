import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const MessagePage = ({ data }) => (
  <Layout>
    <h1>Messages</h1>
    <p>Liste des messages</p>
    <ul>
      {data.allStrapiMessage.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.titre}</Link>
          </h2>
          <p>{document.node.description}</p>
          <p>{document.node.audio}</p>
          <audio src={document.node.audio} controls/>
        </li>
      ))}
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MessagePage

export const pageQuery = graphql`  
  query MessagePage {
    allStrapiMessage {
      edges {
        node {
          id
          titre
          description
          date
          audio
        }
      }
    }
  }
`