'use client'
import React, { useState, useEffect } from 'react';
import fetchWritingData from './fetchParticularWritingData';

const WritingPage = ({ siteSection, slug, styles }) => {
  const [bigSluggy, setBigSluggy] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchWritingData(siteSection, slug);
        setBigSluggy(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [siteSection, slug]); // Trigger fetch on component mount or when siteSection or slug changes

  if (!bigSluggy) {
    // Render loading state while data is being fetched
    console.log('Loading...')
    return <div>Loading...</div>;
  }

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
