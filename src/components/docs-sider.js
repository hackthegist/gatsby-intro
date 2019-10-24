import React from 'react'
import { css } from '@emotion/core'
// import PropTypes from 'prop-types';
import { useStaticQuery, Link, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    query odcstagsquery {
      site {
        siteMetadata {
          title
        }
      }
      allFile(filter: { sourceInstanceName: { eq: "posts" } }, limit: 2000) {
        group(field: childMdx___frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  const group = data.allFile.group
  return (
    <aside className="menu">
      <div className="column">
        <p className="menu-label has-text-black">Tags</p>

        <ul className="menu-list">
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${tag.fieldValue}/`}>
                {tag.fieldValue}{' '}
                <strong>
                  <small class="has-text-primary">{tag.totalCount}</small>
                </strong>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
