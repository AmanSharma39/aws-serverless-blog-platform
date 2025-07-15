import React, { useState } from 'react';
import API from '../utils/api';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    API.post('/posts', { title, content }).then(() => {
      alert('Blog created!');
      setTitle('');
      setContent('');
    });
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
        />
        <br />
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Content"
        />
        <br />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default Admin;