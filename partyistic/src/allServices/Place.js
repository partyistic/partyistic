'use strict';
import React from 'react';
import { Col, Card, Form } from 'react-bootstrap'

export default function Place() {


  return (
    <>
    <h2 className="align-middle">Reserve a place</h2>
      <div className="row row-cols-6">

      <div className="col"></div>

        <div className="col">

          <a href="/Services/places"> <Card.Img variant=""  alt="First image" src="https://www.arabiaweddings.com/sites/default/files/styles/max750/public/articles/2019/11/amman_wedding_venues_4.jpg?itok=J6kPkSfQ" />
          </a>
          </div>

        <div className="col">
        <a href="/Services/places"> <Card.Img alt="Second image" src="https://www.arabiaweddings.com/sites/default/files/styles/max750/public/articles/2019/11/amman_wedding_venues_4.jpg?itok=J6kPkSfQ" />
        </a>
        </div>

        <div className="col">
        <a href="/Services/places"> <Card.Img variant="" alt="Third image" src="https://www.arabiaweddings.com/sites/default/files/styles/max750/public/articles/2019/11/amman_wedding_venues_4.jpg?itok=J6kPkSfQ" />
        </a>
        </div>

        <div className="col">
        <a href="/Services/places"> <Card.Img alt="Second image" src="https://www.arabiaweddings.com/sites/default/files/styles/max750/public/articles/2019/11/amman_wedding_venues_4.jpg?itok=J6kPkSfQ" />
        </a>

        </div>


        <div className="col"></div>

        </div>



    </>
  );

}
