// Written by Stephen Elliott on 12/1/2024

import React from 'react';

function Blogs() {
  return (
    <div className='container'>
      <div className='row'>
        <h1 className='fs-1 text-center'>
          Blogs.
        </h1>
      </div>
      <div className='row'>
        <div className='col-3 '>
          <div className='container border border-primary'>
            <div className='m-3'>
              <div className=''>
                <h3 className='fs-5'>February.</h3>
                <ul className='fs-5 list-unstyled'>
                  {/* TODO: embolden or italicise the list entry when page is active. */}
                  <li>Around the World - Part Two.</li>
                  <li>A Life On the Wind.</li>
                  <li>Desert Nights.</li>
                </ul>
              </div>
              <div>
                <h2 className='fs-5'>January <span className='fs-4'>2024.</span></h2>
                <ul className='fs-5 list-unstyled'>
                  <li>Around the World - Part One.</li>
                  <li>Catching Tides.</li>
                  <li>The Way of the Road.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='container border border-primary ps-3 pe-3 pt-2'>
            <div row className='m-3'>
              <div className='row'>
                <div className='col-auto'>
                  <h2 className='fs-4'>
                    Around the World - Part 2.
                  </h2>
                </div>
                <div className='col-auto'>
                  {/* TODO: shift down to baseline of title */}
                  <p className='ms-2'>
                    15/12/2024.
                  </p>
                </div>
              </div>
              <div className='row'>
                <p>Here is some blog text about my trip around the world in December 2024. I could talk about this for a while. Matter of fact, I will be talking about this for a while...</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='container border border-primary ps-3 pe-3 pt-2'>
            <div className='row m-3 text-center'>
              <h1 className='fs-4'>Reader Comments</h1>
              <div className='row'>
                <p>I am amazed by the decadence of your dishes!</p>
              </div>
              <div className='row'>
                <p>Dude above me is a poet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs;
