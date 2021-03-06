const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const cityPost = path.resolve(
    `./src/components/golfwithhotels/GolfWithHotels.js`
  );
  const blogPost = path.resolve(`./src/components/templates/Area.js`);

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        wpcontent {
          menuItems {
            edges {
              node {
                id
                label
              }
            }
          }
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
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.wpcontent.venues.edges;
  const cityposts = result.data.wpcontent.menuItems.edges;

  posts.forEach((post, index) => {
        console.log('post', post);
    createPage({
      path: post.node.slug,
      component: blogPost,
      context: {
        id: post.node.id,
      },
    });
  });
    console.log('cityposts', cityposts);

  cityposts.forEach((post, index) => {
    console.log('citypost', post);
    createPage({
      path: post.node.label,
      component: cityPost,
      context: {
        id: post.node.id,
      },
    });
  });
};
