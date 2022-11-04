import React from 'react';
import './banner.css'

const BannerItem = ({ slide }) => {
    const { image } = slide;
    return (

        <div id={`slide${slide.id}`} className="carousel-item relative w-full">
            <div className='img-gradient'>
                <img src={image} alt='image' className="rounded-xl w-full" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2  top-1/4 left-24 ">
                <h1 className='text-5xl font-bold text-white'> Affordable <br /> Price For Car <br /> Servicing</h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2  w-1/2 top-1/2 left-24 ">
                <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 top-3/4 left-24 ">
                <button className="btn glass mr-5">Glass button</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${slide.prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${slide.next}`} className="btn btn-circle">❯</a>
            </div>
        </div >

    );
};

export default BannerItem;