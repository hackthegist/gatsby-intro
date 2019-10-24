import React from 'react'
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import Header from './header'
import useSiteMetadata from '../hooks/use-sitemetadata'
import '../styles/styles.scss'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <div>
        <main className="container">{children}</main>
      </div>
      <div
        css={css`
          position: fixed;
          bottom: 0;
        `}
      >
        <div class="card">
          <footer class="card-footer is-hidden-tablet">
            <a href="/posts/" class="card-footer-item">
              blog
            </a>
            <a href="/docs/" class="card-footer-item">
              docs
            </a>
            <a href="/about/" class="card-footer-item">
              about
            </a>
            <a href="/contact/" class="card-footer-item">
              contact
            </a>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout
