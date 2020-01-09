import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1>
          <Link ClassName="h1link" to={`/`}>
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link ClassName="h3link" to={`/`}>
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div ClassName="layoutdiv">
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          Copyright©Takafumi Tsukada. All Rights Reserved.
        </footer>
      </div>
    )
  }
}
/*
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
*/

export default Layout
