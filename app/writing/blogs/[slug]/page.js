'use client'

import React, { Suspense } from 'react';
import WritingPage from '../../writingPage'; // Correct import
import styles from '../page.module.css';
import { useParams } from 'next/navigation';

export default function BlogPage() {
  console.log('You made it here');
  const slug = useParams().slug;

  return (
    <Suspense fallback={<div>Loading...</div>}>
        <WritingPage siteSection='blogs' slug={slug} styles={styles} />
    </Suspense>
  );
}
