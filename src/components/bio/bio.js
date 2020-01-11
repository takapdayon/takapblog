/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styles from "./bio.module.scss"

//import { rhythm } from "../../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className={styles.home_container_sidebar}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
      />
      <p className={styles.ptag}>
        技術系だけでなくE-sport(主にLOL)<br></br>に関しての記事も連載します
      </p>
      <ul className={styles.icons}>
        <li className={styles.aicon}>
        </li>
      </ul>
    </div>
  )
}
/*
<p>
Written by <strong>{author}</strong> who lives and works in San
Francisco building useful things.
{` `}
<a href={`https://twitter.com/${social.twitter}`}>
  You should follow him on Twitter
</a>
</p>
*/

export default Bio