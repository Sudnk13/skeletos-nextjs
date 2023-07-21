"use client";
import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg ${styles.navbar}`}
    >
      <div className="container">
        <Link href="/">
          <a className={`navbar-brand ${styles.logo}`}>
            <img src="/favicon-96x96.png" alt="" className={styles.companyLogo}/>
            Skeletos
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className={`nav-link ${styles.link}`}>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className={`nav-link ${styles.link}`}>About Us</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className={`nav-link ${styles.link}`}>Contact Us</a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${styles.dropdownToggle}`}
                href="#"
                id="servicesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>
              <div
                className={`dropdown-menu ${styles.dropdownMenu}`}
                aria-labelledby="servicesDropdown"
              >
                <Link href="/services/ims">
                  <a className="dropdown-item">IMS</a>
                </Link>
                <Link href="/services/devops">
                  <a className="dropdown-item">DevOps</a>
                </Link>
                <Link href="/services/development">
                  <a className="dropdown-item">Development</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/blogs">
                <a className={`nav-link ${styles.link}`}>Blogs</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/careers">
                <a className={`nav-link ${styles.link}`}>Careers</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
