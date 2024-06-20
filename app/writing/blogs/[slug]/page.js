'use client'

import React from 'react';
import WritingPage from '../../writingPage'; // Correct import
import styles from '../page.module.css';

export default function Page({params: {slug}}) {
  return <WritingPage siteSection='blogs' slug={slug} styles={styles} />
}
