/** @format */

import React from 'react';
import { Card } from 'react-bootstrap';

export default function Place(props) {
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
        Reserve a place
      </h1>
      <div className='row row-cols-6'>
        {props.places &&
          props.places.map(
            (item, key) =>
              key < 4 && (
                <div className='col'>
                  <a href='/Services/places'>
                    <Card.Img
                      style={{ height: '20rem', marginTop: '2%' }}
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
