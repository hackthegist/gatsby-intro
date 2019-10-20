import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        nodes {
          childMdx {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  return data.allFile.nodes.map(nodes => ({
    title: nodes.childMdx.frontmatter.title,
    author: nodes.childMdx.frontmatter.author,
    slug: nodes.childMdx.frontmatter.slug,
    excerpt: nodes.childMdx.excerpt,
  }));
};

export default usePosts;
