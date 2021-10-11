/** @format */

import React from 'react';
import { Card } from 'react-bootstrap';

export default function RentCar(props) {
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
        Rent a Car
      </h1>
      <div className='row row-cols-6'>
        {props.cars &&
          props.cars.map(
            (item, key) =>
              key < 4 && (
                <div className='col'>
                  <a href='/Services/cars'>
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
