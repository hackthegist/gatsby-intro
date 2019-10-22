import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Tags from '../components/tags';
import { Row, Col } from 'antd';


export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <Row>
        <Col span={8}>
          <Tags />
        </Col>
        <Col span={16}>
          <h2>All posts</h2>
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </Col>
      </Row>
    </Layout>
  );
};
