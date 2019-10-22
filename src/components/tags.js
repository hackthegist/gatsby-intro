import React from 'react';
import { css } from '@emotion/core';
// import PropTypes from 'prop-types';
import { useStaticQuery, Link, graphql } from 'gatsby';


export default () => {
  const data = useStaticQuery(graphql`
  query tagsquery {
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
  const group = data.allFile.group;
  return (
    <>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}
            css={css`
            
            font-size: 1rem;
            line-height: 1;
            margin: 0 0.5rem 0 0;
            padding: 0.25rem;
            list-style-type: none;
          `}>
            <Link
              css={css`
              text-decoration: none;
              color: black;
              font-weight: bold;
            `} to={`/tags/${tag.fieldValue}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
};
