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
      
      <h1>Software developer, entrepreneur and adventurer.</h1>

      <p>I am an entrepreneurial, technology-focused and proactive software developer with a track-record of getting things done! I strive to keep up to date with the latest technology trends, with my recent focus being React and decentralised applications.</p>
      <p>With experience in various project team roles (developer, PM, BA, UX) I can contribute technical as well as non-technical insights to help the team achieve its goals. In the last few years I have founded two tech startups, worked in the private and public sectors, and have transitioned from project support to technical roles.</p>
      
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
