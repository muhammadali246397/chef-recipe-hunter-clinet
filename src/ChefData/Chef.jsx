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
            <h2 className='fw-bold border-bottom text-danger'>Our all chefs</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quis aspernatur nisi doloribus accusamus commodi nam aliquid iusto magni inventore, saepe laboriosam. Atque consequatur, eveniet ipsum excepturi possimus eaque debitis.</p>
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