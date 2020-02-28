import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio/bio"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Image from 'gatsby-image';
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="home_container">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article className="home_container_post" key={node.fields.slug}>
                <Link className="post_name" to={node.fields.slug}>
                  <div className="post_card_image" >
                    <Image fixed={node.frontmatter.hero.childImageSharp.fixed} />
                  </div>
                </Link>
                <Link to={node.fields.slug}>
                  <div className="post_content">
                    <header>
                      <h3 className="post_title">
                          {title}
                      </h3>
                    </header>
                    <section className="post_heading">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </section>
                  </div>
                </Link>
                <div className="post_data">
                  <small>{node.frontmatter.date}</small>
                </div>
              </article>
            )
          })}
        </div>
      </Layout>
    )
  }
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
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            hero {
              childImageSharp {
                fixed(width: 400, height:250) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
