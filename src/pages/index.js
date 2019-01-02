import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={['bitpivot']} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  )
}
