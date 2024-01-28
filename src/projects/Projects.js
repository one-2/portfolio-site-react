// Written by Stephen Elliott on 12/1/2024

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavPanel() {
  return (
    <div className='container border border-secondary'>
      {/* TODO: fix border size */}
      <div className='mt-3 mb-3'>
        <h2 className='fs-4'>
          The Nav Panel
        </h2>
      </div>
      <div>
        <div>
          <NavLinkList subtitle='2024' />
        </div>
      </div>
    </div>
  )
}

function StoryPanel() {
  return (
    <div className='container border border-primary'>
      <div className='row mt-3 mb-3'>
        <div className='col-auto'>
          <h2 className='fs-3 ms-2'>
            My Portfolio Site
          </h2>
        </div>
        <div className='col-auto'>
          {/* TODO: shift down to baseline of title */}
          <p className='ms-2'>
            23/15/42-51/79/54.
          </p>
        </div>
      </div>

      <div className='row ms-1 me-2 mb-3'>
        <div className=''>
          <h3 className='fs-5'>
            Summary
          </h3>
          <p>
            A brief overview of my project. I built a website from scratch using a combination of online learning, React, and React Bootstrap.
          </p>
        </div>
        <div>
          <h3 className='fs-5'>
            Skills
          </h3>
          <ul>
            <li>HTML, CSS, and Javascript</li>
            <li>React and React Bootstrap</li>
            <li>Frontend design and prototyping</li>
          </ul>
        </div>
        <div>
          <h3 className='fs-5'>
            The full story
          </h3>
          <p>
            The building of this website is quite the tale, so strap in! I heard the first whisperings on a hot day, deep in the November haze...
          </p>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <NavPanel />
        </div>
        <div className='col-9'>
          <StoryPanel />
        </div>
      </div>
    </div>
  )
}

function NavLinkList({ subtitle }) {
  const allLinks = [
    <NavLinkListItem to={''} text={'This website'} />,
    <NavLinkListItem to={''} text={'Deez nuts'} />
  ];

  return (
    <container>
      <h3 className='fs-5'>
        {subtitle}
      </h3>
      <ul>
        {allLinks}
      </ul>
    </container>
  );
}

function NavLinkListItem({ to, text }) {
  return (
    <li>
      <Link to={to} className='text-center fs-5 text-black' style={{ textDecoration: 'none' }}>
        {text}
      </Link>
    </li>
  )
}

export default Projects;
