const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/post.js');
  const docsTemplate = path.resolve('src/templates/docs.js');
  const tagTemplate = path.resolve('src/templates/tags.js');

  const result = await graphql(`
    {
      postsQuery: allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        nodes {
          childMdx {
            frontmatter {
              title
              slug
            }
          }
        }
      }
      docsQuery: allFile(filter: { sourceInstanceName: { eq: "docs" } }) {
        nodes {
          childMdx {
            frontmatter {
              title
              slug
            }
          }
        }
      }
      tagsGroup: allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        group(field: childMdx___frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panic('failed to create contents', result.errors);
  }

  const posts = result.data.postsQuery.nodes;
  const docs = result.data.docsQuery.nodes;
  const tags = result.data.tagsGroup.group;

  posts.forEach(node => {
    createPage({
      path: `/posts/${node.childMdx.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.childMdx.frontmatter.slug, // pageContext.slug in templates.js & graphQL variable $slug
      },
    });
  });

  docs.forEach(node => {
    createPage({
      path: node.childMdx.frontmatter.slug,
      component: docsTemplate,
      context: {
        slug: node.childMdx.frontmatter.slug, // pageContext.slug in templates.js & graphQL variable $slug
      },
    });
  });

  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
