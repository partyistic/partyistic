'use strict';
import React from 'react';
import { Col, Card, Form } from 'react-bootstrap'

export default function MusicBand() {

  return (
    <>
        <h2>Choose a Music Band</h2>
      <div className="row row-cols-6">

      <div className="col"></div>
        <div className="col">

          <a href="/Services/musicBand"><Card.Img variant="" alt="First image" src="https://media-api.theknot.com/images/eea9b5a5-6400-44e1-bd70-5d1a83748b96~rs_768.h" />
        </a>
          </div>

        <div className="col">
        <a href="/Services/musicBand"><Card.Img alt="Second image" src="https://media-api.theknot.com/images/eea9b5a5-6400-44e1-bd70-5d1a83748b96~rs_768.h" />
        </a>
        </div>

        <div className="col">
        <a href="/Services/musicBand"><Card.Img variant="" alt="Third image" src="https://media-api.theknot.com/images/eea9b5a5-6400-44e1-bd70-5d1a83748b96~rs_768.h" />
        </a>
        </div>

        <div className="col">
        <a href="/Services/musicBand"><Card.Img alt="Second image" src="https://media-api.theknot.com/images/eea9b5a5-6400-44e1-bd70-5d1a83748b96~rs_768.h" />
        </a>

        </div>
        <div className="col"></div>
      </div>



    </>
  );

}
