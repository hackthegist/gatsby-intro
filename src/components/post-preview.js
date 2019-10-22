import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import ReadLink from '../components/read-link';
import { Tag } from 'antd'

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      margin-top: 0.75rem;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <h3>
      <Link to={`posts/${post.slug}`}>{post.title}</Link>
    </h3>
    <p>{post.excerpt}</p>
    <ReadLink to={`posts/${post.slug}`}>read this post &rarr;</ReadLink>
    <div>
      {post.tags.map(tag => (
        <Tag color="#f50">{tag}</Tag>
      ))}.
    </div>

  </article>
);

export default PostPreview;
