import React from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-light my-5 py-2 '>
            <div className='row row-cols-md-3 justify-content-between text-center border-bottom border-danger py-5 px-1'>
                <div className=''>
                    <h5>Follow Us: <span><FaFacebook></FaFacebook></span>
                        <span className='ms-2 me-2'><FaTwitter></FaTwitter></span>
                        <span><FaGoogle></FaGoogle></span>
                    </h5>

                </div>
                <div>
                    <h5 className='text-center'><span className='border-bottom border-danger text-danger'>Chef Master</span></h5>
                </div>
                <div>
                    <input className='p-1 rounded' type="text" placeholder='Email address' />
                    <button className='ms-2 btn btn-danger'>Subscribe</button>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;