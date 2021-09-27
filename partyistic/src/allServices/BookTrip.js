'use strict';
import React from 'react';
import { Col, Card, Form } from 'react-bootstrap'

export default function BookTrip() {

  return (
    <>
    <h2 className="align-middle">Book a Trip</h2>
      <div className="row row-cols-6">

      <div className="col"></div>

        <div className="col">

          <a href="/Services/trip"><Card.Img variant="" alt="First image" src="https://ei.marketwatch.com/Multimedia/2019/02/25/Photos/ZH/MW-HE536_airpla_20190225131547_ZH.jpg?uuid=5fa81d1a-3929-11e9-9462-ac162d7bc1f7" />
        </a>
          </div>

        <div className="col">
        <a href="/Services/trip"><Card.Img alt="Second image" src="https://ei.marketwatch.com/Multimedia/2019/02/25/Photos/ZH/MW-HE536_airpla_20190225131547_ZH.jpg?uuid=5fa81d1a-3929-11e9-9462-ac162d7bc1f7" />
        </a>
        </div>

        <div className="col">
        <a href="/Services/trip"><Card.Img variant="" alt="Third image" src="https://ei.marketwatch.com/Multimedia/2019/02/25/Photos/ZH/MW-HE536_airpla_20190225131547_ZH.jpg?uuid=5fa81d1a-3929-11e9-9462-ac162d7bc1f7" />
        </a></div>

        <div className="col">
        <a href="/Services/trip"><Card.Img alt="Second image" src="https://ei.marketwatch.com/Multimedia/2019/02/25/Photos/ZH/MW-HE536_airpla_20190225131547_ZH.jpg?uuid=5fa81d1a-3929-11e9-9462-ac162d7bc1f7" />
        </a>

        </div>
        <div className="col"></div>
      </div>



    </>
  );

}
