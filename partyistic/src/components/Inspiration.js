import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'

export default function Inspiration(props) {
   
    const wedding = [
        { id: 1, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
        { id: 2, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
        { id: 3, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
        { id: 4, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
        { id: 5, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
    ];
    const grad = [
        { id: 1, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
        { id: 2, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
        { id: 3, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
        { id: 4, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
        { id: 5, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
    ];
    const birthday = [
        { id: 1, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
        { id: 2, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
        { id: 3, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
        { id: 4, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
        { id: 5, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
    ];
    const special = [
        { id: 1, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
        { id: 2, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
        { id: 3, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
        { id: 4, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
        { id: 5, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', title: 'foo', description: 'bar' },
    ];
   


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
            
            <h1 > Wedding parties </h1>
            {/* render the img in card  */}
           
            {wedding && wedding.map((wedding, key) => (
                key < 3 ?
                    <Nav>
                        <Nav.Link href="/inspiration/parties">  <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={wedding.src} />
                        </Card></Nav.Link>
                    </Nav>
                    :
                    <>  </>
            ))}
    
            <h1 > Graduation Parties </h1>
            {/* render the img in card  */}
            {grad && grad.map((grad, key) => (
                key < 3 ?
                    <Nav>
                        <Nav.Link href="/inspiration/parties">  <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={grad.src} />
                        </Card></Nav.Link>
                    </Nav>
                    :
                    <>  </>
            ))}
            <h1 > Birthday Parties </h1>
            {/* render the img in card  */}
            {birthday && birthday.map((birthday, key) => (
                key < 3 ?
                    <Nav>
                        <Nav.Link href="/inspiration/parties">  <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={birthday.src} />
                        </Card></Nav.Link>
                    </Nav>
                    :
                    <>  </>
            ))}
            <h1 > Special Parties</h1>
            {/* render the img in card  */}
            {special && special.map((special, key) => (
                key < 3 ?
                    <Nav>
                        <Nav.Link href="/inspiration/parties">  <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={special.src} />
                        </Card></Nav.Link>
                    </Nav>


                    :
                    <>  </>
            ))}


        </>
    );
}


