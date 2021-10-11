/** @format */

import React from 'react';
import { Card } from 'react-bootstrap';

export default function BookTrip(props) {
  return (
    <>
      <h1
        style={{
          marginTop: '3.5%',
          display:'flex',
          justifyContent:'center',
          color: 'white',
          fontFamily: "'Dancing Script', cursive",
          fontSize:'60px',
        }}
        className='align-middle'>
        Book a Trip
      </h1>
      <div className='row row-cols-6'>
        {props.trips &&
          props.trips.map(
            (item, key) =>
              key < 4 && (
                <div className='col'>
                  <a href='/Services/trips'>
                    <Card.Img
                      style={{ height: '20rem', marginTop: '3%' }}
                      variant=''
                      alt={item.images.images[0]}
                      src={item.images.images[0]}
                    />
                  </a>
                </div>
              )
          )}
      </div>
    </>
  );
}
