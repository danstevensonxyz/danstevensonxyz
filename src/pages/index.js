import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Home" />
    </Layout>
  )
}

export default BlogIndex