import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'; // convert excutable code in mdx { code { body }}
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import Tags from '../components/tags';
import { Row, Col } from 'antd';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <Row>
      <Col span={8}>
        <Tags />
      </Col>
      <Col span={16}>
        <h1>{post.frontmatter.title}</h1>
        <p
          css={css`
        font-size: 0.75rem;
      `}
        >
          Posted by {post.frontmatter.author}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <ReadLink to="/">&larr; back to all posts</ReadLink>
      </Col>
    </Row>
  </Layout>
);

export default PostTemplate;
