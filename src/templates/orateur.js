import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout' 

const OrateurTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiOrateur.nom + " " + data.strapiOrateur.prenom}</h1>
    <p>{data.strapiOrateur.telephone}</p>
    <p>{data.strapiOrateur.mail}</p>
  </Layout>
)

export default OrateurTemplate

export const query = graphql`
  query OrateurTemplate($id: String!) {
    strapiOrateur(id: {eq: $id}) {
        nom
        prenom
        telephone
        mail
    }
  }
`