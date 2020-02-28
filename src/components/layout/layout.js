import React from "react"
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import { Link } from "gatsby"
import styles from "./layout.module.scss"

//import { rhythm, scale } from "../../utils/typography"

export default class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div className={styles.topheader}>
          <h1 className={styles.h1link}>
            {title}
          </h1>
          <p className={styles.ptag}>
            about engineer/gamer
          </p>
        </div>
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
