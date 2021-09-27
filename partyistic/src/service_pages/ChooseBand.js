import React from 'react';

import { Col, Card, Form, Nav } from 'react-bootstrap'
import useMusicBands from '../hook/useServicesMusicBands';

export default function ChooseBand() {
    const musicbands  = useMusicBands().resources

    return (
        <>
            <br></br><br></br>

            <div className="row row-cols-4">
            
                <div className="col ">
    
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
                    <Form.Select className="col " aria-label="Default select example">
                        <option>Available Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="3">April</option>
                    </Form.Select>
                </div>


                <div className="col">
                <input type="text" placeholder="Maximum Price"></input>
                </div>

            </div>

            <br></br><br></br><br></br>
            <h1>Choose a Music Band</h1>
            <br></br><br></br>

            <div className='row row-cols-6'>
            <div className='col'></div>
    
            {musicbands &&
              musicbands.map(
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
    
            {musicbands &&
              musicbands.map(
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
    
            {musicbands &&
              musicbands.map(
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
    