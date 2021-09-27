'use strict';
import React from 'react';
import { Col, Card, Form } from 'react-bootstrap'

export default function Fashion() {

  return (
    <>
    <h2 className="align-middle">Get Fashion</h2>
      <div className="row row-cols-6">

      <div className="col"></div>

        <div className="col">

          <a href="/Services/fashion"><Card.Img variant="" alt="First image" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart" />
        </a>
          </div>

        <div className="col">
        <a href="/Services/fashion"><Card.Img alt="Second image" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart" />
        </a>
        </div>

        <div className="col">
        <a href="/Services/fashion"><Card.Img variant="" alt="Third image" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart" />
        </a>
        </div>

        <div className="col">
        <a href="/Services/fashion"><Card.Img alt="Second image" src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/08/30/10/onlineshoppingclothing.jpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart" />
        </a>

        </div>


        <div className="col"></div>

        </div>
    </>
  );

}
