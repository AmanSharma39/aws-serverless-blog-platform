import React from 'react';
import { Link } from 'react-router-dom';



const BlogCard = ({ blog }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Link to={`/blog/${blog.id}`}><h3>{blog.title}</h3></Link>
      <p>{blog.content.slice(0, 100)}...</p>
    </div>
  );
};

export default BlogCard;

