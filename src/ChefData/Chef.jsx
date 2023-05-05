import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';
import { Row } from 'react-bootstrap';

const Chef = () => {
    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('https://assignment-ten-server-muhammadali246397.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChef(data))
        .catch(error => console.log(error.message))
    },[])
    console.log(chef)
    return (
        <div>
            <div className='my-5 text-center'>
            <h1 className='fw-bold text-danger'><span className='border-bottom border-danger py-2'>Our all chefs</span></h1>

            <p className='text-center my-4'>As a chef team, its important to communicate effectively and work together towards a common goal. Encourage open and honest communication among team members, and make sure that everyone is aware of their roles and responsibilities.</p>
            </div>

           <div className='row row-cols-md-3'>
           {
                chef.map(c => <ChefCard
                key={c.id}
                chefdata = {c}
                ></ChefCard>)
            }
           </div>
        </div>
    );
};

export default Chef;