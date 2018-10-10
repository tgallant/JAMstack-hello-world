import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>
      My name is Tim. I have been working as a software engineer
      for over 5 years. I use React, Gatsby, and Drupal every day
      at work. I like going to hackathons to meet new friends and
      collaborate with smart people.
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
