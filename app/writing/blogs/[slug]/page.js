'use client'

import styles from '../page.module.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const { slug } = useParams(); // Fetches the slug from the URL on page mount

  useEffect(() => {
    fetch('http://localhost:5050/writing/blogs')  // TODO Test replace in prod
      .then(response => response.json())
      .then(data => setBlogPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const post = blogPosts.find(item => item.metadata.slug === slug);

  // Render logic
  return (
    <div className={styles.entry}>
      <h1>{post.header.title}</h1>
      <h4>{post.metadata.date}</h4>
      <h4>{post.header.description}</h4>
      <p>{post.body.text}</p>
    </div>
  )
}
