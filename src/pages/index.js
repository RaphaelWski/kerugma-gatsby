import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Bienvenue</h1>
    <div style={{ maxWidth: '150px'}}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage