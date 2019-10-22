import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        nodes {
          childMdx {
            excerpt
            frontmatter {
              title
              author
              slug
              tags
            }
          }
        }
      }
    }
  `);

  return data.allFile.nodes.map(node => ({
    title: node.childMdx.frontmatter.title,
    author: node.childMdx.frontmatter.author,
    slug: node.childMdx.frontmatter.slug,
    excerpt: node.childMdx.excerpt,
    tags: node.childMdx.frontmatter.tags
  }));
};

export default usePosts;
