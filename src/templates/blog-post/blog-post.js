import React from "react"
import { Link, graphql } from "gatsby"
import Image from 'gatsby-image';

import Bio from "../../components/bio/bio"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo/seo"
import styles from "./blog-post.module.scss"
import Share from "../../components/share/share";

//import { rhythm, scale } from "../../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteUrl = this.props.data.site.siteMetadata.siteUrl
    const { previous, next , slug } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className={styles.blog_head}>
          <div className={styles.blog}>
            <article>
              <header>
                <div className={styles.topimage}>
                  {post.frontmatter.hero && <Image fluid={post.frontmatter.hero.childImageSharp.fluid} />}
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
            <Share  postNode={post} postPath={slug} siteUrl={siteUrl}/>
          </div>
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
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        description
        hero {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

/*
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
            <Share  postNode={post} postPath={slug} />
*/