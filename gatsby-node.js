const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve(`./src/components/templates/Area.js`);

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        wpcontent {
          venues {
            edges {
              node {
                id
                title
                slug
              }
            }
          }
        }
      }
    `
  );
console.log(result, 'result');
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.wpcontent.venues.edges;
  posts.forEach((post, index) => {
      createPage({
        path: post.node.slug,
        component: blogPost,
        context: {
          id: post.node.id,
        },
      })
  });
};
