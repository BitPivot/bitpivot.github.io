import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Page, Footnote } from '../components/Page'
import { BitPivotLogo } from '../components/BitPivotLogo'

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={['bitpivot']} />
      <Page>
        <BitPivotLogo />
        <Footnote>
          <p>BitPivot is currently dormant.</p>
          <p>
            Follow <a href="https://www.twitter.com/BitPivot">@bitpivot</a> for
            updates.
          </p>
        </Footnote>
      </Page>
    </Layout>
  )
}
