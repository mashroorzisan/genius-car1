import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="hero  my-24">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} className="w-4/5 h-full  border-solid border-8 border-white rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute right-5 w-3/5  top-1/2  border-solid border-8 border-white rounded-lg shadow-xl" />
                </div>
                <div className='w-1/2'>
                    <p className='text-orange-600 font-bold text-lg'>About Us</p>
                    <h1 className="text-5xl font-bold my-5">We are qualified  <br />
                        & of experience <br />
                        in this field</h1>
                    <p className="py-6 my-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  <br />
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;