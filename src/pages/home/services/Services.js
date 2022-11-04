import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center '>
                <p className='text-2x font-bold text-orange-600 '>Services</p>
                <h2 className='text-5xl font-semibold mb-5'>Our Service Area</h2>
                <p className='w-3/5 mx-auto my-5 '>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;