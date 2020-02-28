import React from "react"
import { Link, graphql } from "gatsby"
import Image from 'gatsby-image';

import Bio from "../../components/bio/bio"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo/seo"
import styles from "./blog-post.module.scss"

//import { rhythm, scale } from "../../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className={styles.blog}>
          <article>
            <header>
              <div className={styles.topimage}>
                {post.frontmatter.hero && <Image fixed={post.frontmatter.hero.childImageSharp.fixed} />}
              </div>
              <h1 className={styles.blog_title}>
                {post.frontmatter.title}
              </h1>
              <p>
                {post.frontmatter.date}
              </p>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr/>
          </article>

          <section>
            <nav>
              <ul>
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        hero {
          childImageSharp {
            fixed(width: 640, height:400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
