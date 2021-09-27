import React from 'react';

import { Col, Card, Form, Nav } from 'react-bootstrap'
import useTrips from '../hook/useServicesTrips';

export default function BookATrip() {
    const trips = useTrips().resources
    return (
        <>
            <br></br><br></br>

            <div className="row row-cols-4">
            
                <div className="col "></div>

                <div className="col">
                <input type="text" placeholder="Maximum Price"></input>
                </div>

            </div>

            <br></br><br></br><br></br>
            <h1>Book a Trip</h1>
            <br></br><br></br>

            <div className='row row-cols-6'>
            <div className='col'></div>
    
            {trips &&
              trips.map(
                (item, key) =>
                  key < 4 && (
                    <div className='col'>
                      <Card.Img
                        variant=''
                        alt={item.images.images[0]}
                        src={item.images.images[0]}
                      />
                    </div>
                  )
              )}
    
            <div className='col'></div>
          </div>
          <br></br>
          <br></br>
    
          <div className='row row-cols-6'>
            <div className='col'></div>
    
            {trips &&
              trips.map(
                (item, key) =>
                  key < 4 && (
                    <div className='col'>
                      <Card.Img
                        variant=''
                        alt={item.images.images[0]}
                        src={item.images.images[0]}
                      />
                    </div>
                  )
              )}
    
            <div className='col'></div>
          </div>
          <br></br>
          <br></br>
    
          <div className='row row-cols-6'>
            <div className='col'></div>
    
            {trips &&
              trips.map(
                (item, key) =>
                  key < 4 && (
                    <div className='col'>
                      <Card.Img
                        variant=''
                        alt={item.images.images[0]}
                        src={item.images.images[0]}
                      />
                    </div>
                  )
              )}
    
            <div className='col'></div>
          </div>
          <br></br>
          <br></br>
        </>
      );
    }
    