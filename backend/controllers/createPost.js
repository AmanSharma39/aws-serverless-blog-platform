module.exports = (req, res, posts) => {
  const { title, content } = req.body;
  const newPost = {
    id: Date.now().toString(),
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
};