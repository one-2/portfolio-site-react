'use client'

import React, { useState } from 'react';
import fetchWritingData from './fetchParticularWritingData';

const WritingPage = ({ siteSection, slug, styles }) => {
  const [bigSluggy, setBigSluggy] = useState(null);

  console.log('hello')
  
  const fetchData = async () => {
    try {
      const data = await fetchWritingData(siteSection, slug);
      setBigSluggy(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();

  return (
    <div className={styles.entry}>
      <h1>{bigSluggy.post.header.title}</h1>
      <h4>{bigSluggy.post.metadata.date}</h4>
      <h4>{bigSluggy.post.header.description}</h4>
      <p>{bigSluggy.post.body.text}</p>
    </div>
  );
};

export default WritingPage;
