import React from 'react'
import Layout from '../components/layout'
import useDocs from '../hooks/use-docs'
import DocsSider from '../components/docs-sider'
import ReadLink from '../components/read-link'
import DoctPreview from '../components/doc-preview'

export default () => {
  const docs = useDocs()
  return (
    <Layout>
      <div className="columns">
        <div className="column is-one-fifth">
          <DocsSider />
        </div>
        <div className="column columns is-mobile is-centered">
          <div className="column is-three-quarters ">
            <h2 class="title is-5">All Docs</h2>
            {docs.map(doc => (
              <DoctPreview key={doc.slug} post={doc} />
            ))}
          </div>
        </div>
      </div>

      {/* {docs.map(doc => (
        <PostPreview key={doc.slug} post={doc} />
      ))} */}
    </Layout>
  )
}
