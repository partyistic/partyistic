import React from 'react';

import { Col, Card, Form, Nav } from 'react-bootstrap'

export default function GetFashion() {

    return (
        <>
            <br></br><br></br>

            <div className="row row-cols-4"><div className="col">

            </div>
                <div className="col ">
                    <Nav 
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Nav.Item>
                            <Nav.Link href="#">Man</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Woman</Nav.Link>
                        </Nav.Item>


                        
                    </Nav>
                </div>




                <div className="col">
                    <Form.Select className="col " aria-label="Default select example">
                        <option>City</option>
                        <option value="1">Amman</option>
                        <option value="2">Zarqa</option>
                        <option value="3">Irbid</option>
                        <option value="3">Jarash</option>
                    </Form.Select>
                </div>




                <div className="col">
                <input type="text" placeholder="Maximum Price"></input>
                </div>

            </div>

            <br></br><br></br><br></br>
            <h1>Get Fashion</h1>
            <br></br><br></br>
            <div className="row row-cols-6">

                <div className="col"></div>

                <div className="col">
                    <a href="/Services/places"> <Card.Img variant="" alt="First image" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart" />
                    </a>
                </div>

                <div className="col">
                    <Card.Img alt="Second image" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart" />
                </div>

                <div className="col">
                    <Card.Img variant="" alt="Third image" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart" />
                </div>

                <div className="col">
                    <Card.Img alt="Second image" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart" />
                </div>


                <div className="col"></div>

            </div>
            <br></br><br></br>

            <div className="row row-cols-6">

                <div className="col"></div>

                <div className="col">
                    <Card.Img variant="" alt="First image" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart" />

                </div>

                <div className="col">
                    <Card.Img alt="Second image" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart" />
                </div>

                <div className="col">
                    <Card.Img variant="" alt="Third image" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart" />
                </div>

                <div className="col">
                    <Card.Img alt="Second image" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart" />
                </div>


                <div className="col"></div>

            </div>
            <br></br><br></br>

            <div className="row row-cols-6">

                <div className="col"></div>

                <div className="col">
                    <a href="/Services/places"> <Card.Img variant="" alt="First image" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart" />
                    </a>
                </div>

                <div className="col">
                    <Card.Img alt="Second image" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart" />
                </div>

                <div className="col">
                    <Card.Img variant="" alt="Third image" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart" />
                </div>

                <div className="col">
                    <Card.Img alt="Second image" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart" />
                </div>


                <div className="col"></div>

            </div>
            <br></br><br></br>
        </>
    );

}