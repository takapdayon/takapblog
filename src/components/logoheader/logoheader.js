import React from "react"
import { Link } from "gatsby"
import styles from "./logoheader.module.scss"
import Avatar from "../myimage/myimage"

class Logoheader extends React.Component {
    render() {
        return (
            <div className={styles.site_header}>
                <div className={styles.logo_nav}>
                <div className={styles.site_logo}>takaP</div>
                    <nav className={styles.gnav}>
                        <ul className={styles.gnav__menu}>
                            <li className={styles.gnav__menu__item}><a href="/">Home</a></li>
                            <li className={styles.gnav__menu__item}><a href="https://twitter.com/takapdayon" target="_blank">Twitter</a></li>
                            <li className={styles.gnav__menu__item}><a href="https://github.com/takapdayon" target="_blank">Github</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Logoheader
