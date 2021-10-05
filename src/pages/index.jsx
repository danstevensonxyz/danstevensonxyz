import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Homepage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Latest posts" />
      
      <div className="bio-intro">
        <h1>I'm a software developer, entrepreneur and adventurer.</h1>
      </div>
      
      <div class="latest-posts">
      <h2>Latest posts</h2>
        <ol class="latest-posts-list" style={{ listStyle: `none` }}>
          {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <li key={post.fields.slug} className="post-list-item">
                    <header>
                      <h2>
                        <Link to={post.fields.slug} itemProp="url">
                          {title}
                        </Link>
                      </h2>
                      <p>{post.frontmatter.date}</p>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                </li>
              )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "dddd, DD MMMM yyyy")
          title
          description
        }
      }
    }
  }
`
