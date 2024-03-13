import React from 'react';
import banner from '../../../assets/banner2.jpg'
import car1 from '../../../assets/car1.png'
import car2 from '../../../assets/car2.png'
import car3 from '../../../assets/car3.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className="bg-cover bg-center mx-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            {/* Your content here */}
            <div className="carousel w-full">
                {/* 1st image */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='lg:flex'>
                        <div className='lg:w-2/5 p-16 flex flex-col space-y-8'>
                            <h1 className='text-2xl font-extralight hyphens-auto tracking-wide'>- INTRODUCING THE</h1>
                            <h1 className='animate-charcter text-6xl text-5xl font-normal hyphens-auto tracking-wide'>MERCEDES-AMG</h1>
                            <h1 className='text-4xl font-bold hyphens-auto tracking-wide'>63 S 4MATIC+</h1>
                            <p>We all have a dream car some wish for a classy one where as others dream of having a simple old school one. If is often that you may see someone in a car and say</p>
                            <div className="md:flex shadow">
                                <div className="stat place-items-center">
                                    <div className="stat-title">Speed</div>
                                    <div className="stat-value">31K</div>
                                    <div className="stat-desc">From January 1st to February 1st</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">Engine</div>
                                    <div className="stat-value text-secondary">4,200</div>
                                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                                </div>

                                <div className="stat place-items-center     ">
                                    <div className="stat-title">Fuel Tank</div>
                                    <div className="stat-value">1,200</div>
                                    <div className="stat-desc">↘︎ 90 (14%)</div>
                                </div>

                            </div>
                        </div>
                        <img className='lg:w-3/5 w-4/5' src={car1} />
                    </div>
                    <div className="absolute flex justify-between transform left-5 right-5 lg:bottom-1/2 bottom-16">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>




                {/* 2nd image */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='lg:flex'>
                        <div className='lg:w-2/5 p-16 flex flex-col space-y-8'>
                            <h1 className='text-2xl font-extralight hyphens-auto tracking-wide'>- INTRODUCING THE</h1>
                            <h1 className='animate-charcter text-6xl text-5xl font-normal hyphens-auto tracking-wide'>MERCEDES-AMG</h1>
                            <h1 className='text-4xl font-bold hyphens-auto tracking-wide'>63 S 4MATIC+</h1>
                            <p>We all have a dream car some wish for a classy one where as others dream of having a simple old school one. If is often that you may see someone in a car and say</p>
                            <div className="md:flex shadow">
                                <div className="stat place-items-center">
                                    <div className="stat-title">Speed</div>
                                    <div className="stat-value">31K</div>
                                    <div className="stat-desc">From January 1st to February 1st</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">Engine</div>
                                    <div className="stat-value text-secondary">4,200</div>
                                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                                </div>

                                <div className="stat place-items-center     ">
                                    <div className="stat-title">Fuel Tank</div>
                                    <div className="stat-value">1,200</div>
                                    <div className="stat-desc">↘︎ 90 (14%)</div>
                                </div>

                            </div>
                        </div>
                        <img className='lg:w-3/5 w-4/5' src={car2} />
                    </div>
                    <div className="absolute flex justify-between transform left-5 right-5 lg:bottom-1/2 bottom-16">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='lg:flex'>
                        <div className='lg:w-2/5 p-16 flex flex-col space-y-8'>
                            <h1 className='text-2xl font-extralight hyphens-auto tracking-wide'>- INTRODUCING THE</h1>
                            <h1 className='animate-charcter text-6xl text-5xl font-normal hyphens-auto tracking-wide'>MERCEDES-AMG</h1>
                            <h1 className='text-4xl font-bold hyphens-auto tracking-wide'>63 S 4MATIC+</h1>
                            <p>We all have a dream car some wish for a classy one where as others dream of having a simple old school one. If is often that you may see someone in a car and say</p>
                            <div className="md:flex shadow">
                                <div className="stat place-items-center">
                                    <div className="stat-title">Speed</div>
                                    <div className="stat-value">31K</div>
                                    <div className="stat-desc">From January 1st to February 1st</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">Engine</div>
                                    <div className="stat-value text-secondary">4,200</div>
                                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                                </div>

                                <div className="stat place-items-center     ">
                                    <div className="stat-title">Fuel Tank</div>
                                    <div className="stat-value">1,200</div>
                                    <div className="stat-desc">↘︎ 90 (14%)</div>
                                </div>

                            </div>
                        </div>
                        <img className='lg:w-3/5 w-4/5' src={car3} />
                    </div>
                    <div className="absolute flex justify-between transform left-5 right-5 lg:bottom-1/2 bottom-16">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='lg:flex'>
                        <div className='lg:w-2/5 p-16 flex flex-col space-y-8'>
                            <h1 className='text-2xl font-extralight hyphens-auto tracking-wide'>- INTRODUCING THE</h1>
                            <h1 className='animate-charcter text-6xl text-5xl font-normal hyphens-auto tracking-wide'>MERCEDES-AMG</h1>
                            <h1 className='text-4xl font-bold hyphens-auto tracking-wide'>63 S 4MATIC+</h1>
                            <p>We all have a dream car some wish for a classy one where as others dream of having a simple old school one. If is often that you may see someone in a car and say</p>
                            <div className="md:flex shadow">
                                <div className="stat place-items-center">
                                    <div className="stat-title">Speed</div>
                                    <div className="stat-value">31K</div>
                                    <div className="stat-desc">From January 1st to February 1st</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">Engine</div>
                                    <div className="stat-value text-secondary">4,200</div>
                                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                                </div>

                                <div className="stat place-items-center     ">
                                    <div className="stat-title">Fuel Tank</div>
                                    <div className="stat-value">1,200</div>
                                    <div className="stat-desc">↘︎ 90 (14%)</div>
                                </div>

                            </div>
                        </div>
                        <img className='lg:w-3/5 w-4/5' src={car1} />
                    </div>
                    <div className="absolute flex justify-between transform left-5 right-5 lg:bottom-1/2 bottom-16">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mb-16'>

            </div>

        </div>
    );
};

export default Banner;