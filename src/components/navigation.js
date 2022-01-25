import React from "react";
import { Link } from 'gatsby';
import logo from "../../static/images/logo.png";

import * as styles from './navigation.module.css'

export default function Navigation() {

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">

      <Link to="/" className={styles.logoLink}>
        <img alt="logo" className={styles.logo} src={logo} />
      </Link>

      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/events/" activeClassName="active">
            Events
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/sponsors/" activeClassName="active">
            Sponsors
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/videos/" activeClassName="active">
            Videos
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/speakers/" activeClassName="active">
            Speakers
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/about/" activeClassName="active">
            About
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/" activeClassName="active">
            Get Involved
          </Link>
        </li>
      </ul>
    </nav>
  )
};
