import React, { useState, useEffect } from "react";
import { Link } from 'gatsby';
import logo from "../../static/images/logo.png";
import BurgerMenu from "./burger-menu";


import * as styles from './navigation.module.css'

export default function Navigation() {

  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 860;

  useEffect(() => {
    const handleMenuMode = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleMenuMode);

    return () => window.removeEventListener("resize", handleMenuMode);
  },[]);

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">

      <Link to="/" className={styles.logoLink}>
        <img alt="logo" className={styles.logo} src={logo} />
      </Link>

      {width > breakPoint? (
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
            <Link to="/get-involved/" activeClassName="active">
              Get Involved
            </Link>
          </li>
        </ul>
      ) : (
        <BurgerMenu className={styles.burger_menu} />
      )}

    </nav>
  )
};
