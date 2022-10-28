import React from 'react';
import Caru1 from '../../assets/slider1_slide1.jpg';
import Caru2 from '../../assets/slider1_slide2.jpg';
import Caru3 from '../../assets/slider1_slide3.jpg';

const Carusel = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <article className="p-10 w-full text-gray-100 xl:col-span-2 bg-center bg-cover transform " style={{ background: `url(${Caru1})` }}>
                    <h1 className=" mt-10 md:mt-20 text-3xl md:text-5xl text-gray-100 leading-snug text-center min-h-33">
                        HIGH QUALITY PLUMBING SOLUTION
                    </h1>
                    <div className="mt-5 text-center">
                        <span className="text-2xl md:text-4xl">for your renovation needs </span>
                    </div>
                    <div className="mt-5 sm:mb-10 md:mb-15 lg:mb-20 flex justify-center ">
                        <span className="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black ">
                            Our Collection
                        </span>
                    </div>
                </article>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-outline">❮</a>
                    <a href="#slide2" className="btn btn-outline">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <article className="p-10 w-full text-gray-100 xl:col-span-2 bg-center bg-cover transform " style={{ background: `url(${Caru2})` }}>
                    <h1 className=" mt-10 md:mt-20 text-3xl md:text-5xl text-gray-100 leading-snug text-center min-h-33">
                        NEW MODERN COLLECTION
                    </h1>
                    <div className="mt-5 text-center">
                        <span className="text-2xl md:text-4xl">for your bathroom </span>
                    </div>
                    <div className="mt-5 sm:mb-10 md:mb-15 lg:mb-20 flex justify-center ">
                        <span className="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black ">
                            Our Collection
                        </span>
                    </div>
                </article>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-outline">❮</a>
                    <a href="#slide3" className="btn btn-outline">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <article className="p-10 w-full text-gray-100 xl:col-span-2 bg-center bg-cover transform " style={{ background: `url(${Caru3})` }}>
                    <h1 className=" mt-10 md:mt-20 text-3xl md:text-5xl text-gray-100 leading-snug text-center min-h-33">
                        TURN YOUR BATHROOM
                    </h1>
                    <div className="mt-5 text-center">
                        <span className="text-2xl md:text-4xl">into a wellness oasis </span>
                    </div>
                    <div className="mt-5 sm:mb-10 md:mb-15 lg:mb-20 flex justify-center ">
                        <span className="p-3  border-2 border-gray-200 rounded-md text-base hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black ">
                            Our Collection
                        </span>
                    </div>
                </article>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-outline">❮</a>
                    <a href="#slide1" className="btn btn-outline">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Carusel;
