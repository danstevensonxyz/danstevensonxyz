import React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import DapImg from "./dap-apply-for-free-school-meals.png"
import VersifyImg from "./versify-logo-green-background.png"
import Version1Img from "./danstevenson-co-v1.png"

export function DapImgImport() {
  return <img src={DapImg} class="project-block-image" alt="Image of the Sheffield City Council free school meals application form I built as part of the Digital Acceleration Project"/>
}

export function VersifyImgImport() {
  return <img src={VersifyImg} class="project-block-image" alt="Image of the Versify logo with green background"/>
}

export function Version1ImgImport() {
  return <img src={Version1Img} class="project-block-image" alt="Image of version 1 of this website with no navbar or colour and three blog posts"/>
}


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="My projects" />

      <div class="projects-grid">
        <h1>Recent projects</h1>

        <div class="project-block-one-third">
          <a href="/projects/building-online-forms-at-sheffield-city-council">
            <DapImgImport />
          </a>
          <div class="project-block-content">
            <a href="/projects/building-online-forms-at-sheffield-city-council">
              <h2 class="project-block-title">"Digital Acceleration" forms project</h2>
            </a>
            <p class="project-block-description">I built and launched over 100 forms in 12 months on the Sheffield City Council website, using the AEM content management system and JavaScript for routing and show/hide logic. This included forms for free school meals, disabled persons' travel passes and complex coronavirus forms.</p>
          </div>
        </div>

        <div class="project-block-one-third">
          <a href="/projects/versify-the-online-language-exchange">
            <VersifyImgImport />
          </a>
          <div class="project-block-content">
            <a href="/projects/versify-the-online-language-exchange">
              <h2 class="project-block-title">Versify - the online language exchange</h2>
            </a>
            <p class="project-block-description">While at university I founded the Language Exchange Society, which later became Versify, the online language exchange. Working with two other co-founders, we built the web app which allowed language students to practice through face-to-face video chats (before anyone had heard of Zoom!)</p>
          </div>
        </div>

        <div class="project-block-one-third">
            <a href="/projects/personal-website">
              <Version1ImgImport />
            </a>
            <div class="project-block-content">
              <a href="/projects/personal-website">
                <h2 class="project-block-title">Blog and portfolio website</h2>
              </a>
              <p class="project-block-description">Launched at the beginning of my Northcoders journey, this site has evolved since the beginning of 2021 to include blog posts about my experience with Northcoders and past projects. Built using Gatsby, version-controlled with GitHub and hosted with Netlify, it's a project to give me a place to talk about my projects!</p>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default BlogIndex

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
