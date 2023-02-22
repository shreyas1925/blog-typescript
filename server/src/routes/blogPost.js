const { getBlogPosts, updateBlogPostById } = require('../handlers/blogPost');
const { blogPostIdParam, updateBlogPostPayload } = require('../joiSchema/blogPost');

const getBlogPostsRoute = {
  method: 'GET',
  path: '/blog-posts',
  handler: getBlogPosts,
};

const updateBlogPostByIdRoute = {
  method: 'PUT',
  path: '/blog-posts/{id}',
  handler: updateBlogPostById,
  options: {
    validate: {
      params: blogPostIdParam,
      payload: updateBlogPostPayload,
    },
  },
};

module.exports = {
  blogPostRoutes: [
    getBlogPostsRoute,
    updateBlogPostByIdRoute,
  ],
  getBlogPostsRoute,
  updateBlogPostByIdRoute,
};
