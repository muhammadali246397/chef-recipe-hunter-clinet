import React from 'react';
import { useRouteError } from 'react-router-dom';
import errors from '../../src/assets/error.avif';
import { Container } from 'react-bootstrap';

const Errorpage = () => {
    const error = useRouteError()
    return (
        <Container>
            <div id="error-page">
             
              <div className='text-center'>
              <img className='w-100 img-fluid' src={errors} alt="" />
              </div>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </Container>
    );
};

export default Errorpage;