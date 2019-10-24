import React from 'react'
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts'
import PostPreview from '../components/post-preview'
import Sider from '../components/post-sider'

export default () => {
  const posts = usePosts()
  return (
    <Layout>
      <div className="columns">
        <div className="column is-one-fifth">
          <Sider />
        </div>
        <div className="column columns is-mobile is-centered">
          <div className="column is-three-quarters ">
            <h2 class="title is-5">All Posts</h2>
            {posts.map(post => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
