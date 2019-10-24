import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const Header = () => (
  <header class="column is-hidden-mobile">
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-menu">
          <div className="navbar-start is-marginless">
            <span className="navbar-item">
              <strong>{'{'}</strong>
            </span>
            <Link
              to="/posts/"
              className="navbar-item"
              activeclassName="current-page"
            >
              blog
            </Link>
            <Link
              to="/docs/"
              className="navbar-item"
              activeclassName="current-page"
            >
              docs
            </Link>

            <Link
              to="/about/"
              className="navbar-item"
              activeclassName="current-page"
            >
              About
            </Link>
            <Link
              to="/contact/"
              className="navbar-item"
              activeclassName="current-page"
            >
              Contact
            </Link>
            <span className="navbar-item">
              <strong>{'}'}</strong>
            </span>
          </div>
          <div className="navbar-start is-marginless">
            <span className="navbar-item">
              <strong>{'='}</strong>
            </span>
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>
          </div>
        </div>
        <div className="navbar-brand"></div>
      </div>
    </nav>
    <hr />
  </header>
)

export default Header
