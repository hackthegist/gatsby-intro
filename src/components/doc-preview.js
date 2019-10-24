import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import ReadLink from '../components/read-link'

const DocPreview = ({ post }) => (
  <article class="box">
    <h3>
      <Link class="title is-4" to={`posts/${post.slug}`}>
        {post.title}
      </Link>
    </h3>
    <p class="subtitle is-5">{post.excerpt}</p>
    <ReadLink to={`posts/${post.slug}`}>read this post &rarr;</ReadLink>
    <div></div>
  </article>
)

export default DocPreview
