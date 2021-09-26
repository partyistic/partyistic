import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default function Inspiration() {

    return (
        <>
            <h1>Get Inspired!</h1>
            <Carousel>

                <Carousel.Item interval={3000}>

                    <div className='row row-cols-3 '>
                        <div className='col'>
                            <img
                                className="d-block w-100"
                                src="https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png"
                                alt="First slide"
                            />
                        </div>
                        <div className='col'>

                            <img
                                className="d-block w-100"
                                src="http://images5.fanpop.com/image/photos/26500000/6x10-The-One-With-The-Routine-ross-and-monica-geller-26597202-512-384.jpg"
                                alt="Second slide"
                            />
                        </div>
                        <div className='col'>

                            <img
                                className="d-block w-100"
                                src="http://images5.fanpop.com/image/photos/26500000/6x10-The-One-With-The-Routine-ross-and-monica-geller-26597202-512-384.jpg"
                                alt="Second slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <div className='row row-cols-3 '>
                        <div className='col'>

                            <img
                                className="d-block w-100"
                                src="http://images5.fanpop.com/image/photos/26500000/6x10-The-One-With-The-Routine-ross-and-monica-geller-26597202-512-384.jpg"
                                alt="Second slide"
                            />
                        </div>
                        <div className='col'>
                            <img
                                className="d-block w-100"
                                src="https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png"
                                alt="First slide"
                            />
                        </div>
                        <div className='col'>

                            <img
                                className="d-block w-100"
                                src="http://images5.fanpop.com/image/photos/26500000/6x10-The-One-With-The-Routine-ross-and-monica-geller-26597202-512-384.jpg"
                                alt="Second slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <div className='row row-cols-3 '>
                        <div className='col'>
                            <img
                                className="d-block w-100"
                                src="https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png"
                                alt="First slide"
                            />
                        </div>
                        <div className='col'>

                            <img
                                className="d-block w-100"
                                src="http://images5.fanpop.com/image/photos/26500000/6x10-The-One-With-The-Routine-ross-and-monica-geller-26597202-512-384.jpg"
                                alt="Second slide"
                            />
                        </div>
                        <div className='col'>

                            <img
                                className="d-block w-100"
                                src="http://images5.fanpop.com/image/photos/26500000/6x10-The-One-With-The-Routine-ross-and-monica-geller-26597202-512-384.jpg"
                                alt="Second slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    );
}