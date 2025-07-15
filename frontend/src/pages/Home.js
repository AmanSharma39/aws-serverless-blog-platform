import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import BlogCard from '../components/BlogCard';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get('/posts').then(res => setBlogs(res.data));
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  );
};

export default Home;