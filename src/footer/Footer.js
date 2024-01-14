// Written by Stephen Elliott on 12/1/2024

import React from 'react';

function Footer () {
    return (
        <class className='container'>
            <div className='row text-center'>
                <div className='col-4'>
                    <h1 className='fs-5'>This Website</h1>
                    <p>
                        (c) Stephen Elliott 2024 <br/>
                        Built with React and Bootstrap
                    </p>
                </div>
                <div className='col-4'>
                    <h1 className='fs-5'>Follow Me</h1> {/* Should this be h1 styled as p? */}
                    <p>
                        <ul className='list-unstyled'>
                            <li>LinkedIn</li>
                            <li>GitHub</li>
                        </ul>
                    </p>
                </div>
                <div className='col-4'>
                    <h1 className='fs-5'>Contact</h1>
                    <p>My email</p> {/* How do I include this without it getting scraped? */}
                </div>
            </div>
        </class>
    )
}

export default Footer;
