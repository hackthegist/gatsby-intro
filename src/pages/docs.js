import React from 'react';
import Layout from '../components/layout';
import useDocs from '../hooks/use-docs';
import PostPreview from '../components/post-preview';
import ReadLink from '../components/read-link';

export default () => {
  const docs = useDocs();
  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello Seoul!</p>
      <ReadLink to="/">Read the posts &rarr;</ReadLink>
      <br />
      <ReadLink to="/about/">Learn about me &rarr;</ReadLink>

      <h2>Read my docs</h2>
      {docs.map(doc => (
        <PostPreview key={doc.slug} post={doc} />
      ))}
    </Layout>
  );
};
