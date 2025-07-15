module.exports = (req, res, posts) => {
  const post = posts.find(p => p.id === req.params.id);
  if (post) res.json(post);
  else res.status(404).json({ message: 'Post not found' });
};