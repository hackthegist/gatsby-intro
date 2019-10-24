import React from 'react'
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts'
import PostPreview from '../components/post-preview'
import Sider from '../components/post-sider'

export default () => {
  const posts = usePosts()
  return <Layout></Layout>
}
