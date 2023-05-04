import React from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-light my-5 '>
            <div className='d-flex justify-content-between text-center border-bottom py-4 px-1'>
                <div>
                    <h5>Follow Us: <span><FaFacebook></FaFacebook></span>
                        <span className='ms-2 me-2'><FaTwitter></FaTwitter></span>
                        <span><FaGoogle></FaGoogle></span>
                    </h5>

                </div>
                <div>
                    <h5><span className='border-bottom text-danger'>Chef Master</span></h5>
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