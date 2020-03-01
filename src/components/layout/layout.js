import React from "react"
import { Link } from "gatsby"
import styles from "./layout.module.scss"
import Logoheader from "../logoheader/logoheader"

//import { rhythm, scale } from "../../utils/typography"

export default class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
          <Logoheader />
          <div className={styles.topheader}>
            <div className={styles.h1link}>
              {title}
            </div>
            <p className={styles.ptag}>
              about engineer/gamer
            </p>
          </div>
        </div>
      )
    }
    else {
      header = (
        <Logoheader />
      )
    }
    return (
      <div className="layoutdiv">
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          <div className={styles.all_footer}>
            Copyright © takaP.
          </div>
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

//export default Layout
