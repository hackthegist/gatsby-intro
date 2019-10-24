import { graphql, useStaticQuery } from 'gatsby'

const useDocs = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "docs" } }) {
        nodes {
          childMdx {
            excerpt
            frontmatter {
              title
              author
              slug
            }
          }
        }
      }
    }
  `)

  return data.allFile.nodes.map(nodes => ({
    title: nodes.childMdx.frontmatter.title,
    author: nodes.childMdx.frontmatter.author,
    slug: nodes.childMdx.frontmatter.slug,
    excerpt: nodes.childMdx.excerpt,
  }))
}

export default useDocs
