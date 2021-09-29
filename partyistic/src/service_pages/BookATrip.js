
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { Card, Form } from "react-bootstrap";
import useTrips from "../hook/useServicesTrips";
import { useState, useEffect } from "react";







import axios from 'axios';


export default function BookATrip() {
  const originalTrips = useTrips().resources;

  const [trips, setTrips] = useState(originalTrips);
  const App = () => {
    setTrips(useTrips().resources);
  };

  function filtering() {
    let lister = [];

    originalTrips.map((item) => {
      if (item.price <= price) {
        lister.push(item);
        console.log(lister, "trippeieirer");
        setTrips(lister);
      } else {
        setTrips([]);
      }
    });
  }

  const addtoFavorite = (item) => {
    console.log(item);
    console.log(item.id);

    const access_token = localStorage.getItem('access_token');
    console.log('access_token', access_token);

    async function fetchFavorite() {
      const response = await axios.get(
        'https://partyistic.herokuapp.com/ ........ '
      );
    }
  };

  const [showtrip, setShowtrip] = useState(false);
  const [trip, setBd] = useState(false);
  const handleClose = () => setShowtrip(false);
  const handleShow = (trip) => {
    setBd(trip);
    setShowtrip(true);
  };

  const [price, setPrice] = useState(200000000);
  const getPrice = (event) => {
    setPrice(event.target.value);
  };

  const modalshow = () => {
    if (showtrip) {
      return (
        <>
          <Modal 
          size="lg"
          show={showtrip} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title
              style={{fontFamily: "'Dancing Script', cursive", fontSize:"27px"}}
              
              >{trip.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body
            style={{fontFamily: "'Open Sans Condensed', sans-serif", fontSize:"25px"}}
           
            >
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  {trip.description}
                  {trip.images && (
                    <Carousel
                    fade style={{borderRadius:"1%", width:"100%"}}
                    >
                      {trip.images.images &&
                        trip.images.images.map((item) => {
                          return (
                            item && (
                              <Carousel.Item interval={3000}>
                                <img 
                                style={{width:"100%"}}
                                src={item} alt={item} />
                              </Carousel.Item>
                            )
                          );
                        })}
                    </Carousel>
                  )}
                  <Card.Text>Price: {trip.price}</Card.Text>
                  <Card.Text>Reviews:</Card.Text>
                  {trip.reviews &&
                    trip.reviews.reviews.map((review) => (
                      <Card.Text>{review}</Card.Text>
                    ))}
                </Card.Body>
                {/* <button
                  variant='secondary'
                  onClick={() => {
                    addtoFavorite(trip);
                  }}>
                  Add to Favorite
                </button> */}
              </Card>
            </Modal.Body>
           
          </Modal>
        </>
      );
    } else {
      return <> </>;
    }
  };

  const [renderer, setRenderer] = useState(false);
  const pricerRender = () => {
    setRenderer(true);
  };
  
  return (
    <>
    <h1
    style={{ marginTop:"3%", color:"white",marginLeft:"40%", fontFamily: "'Dancing Script', cursive"}}
    >Book a Trip</h1>
     <br></br>
    <br></br>
      <div className='row row-cols-5'>

        <div className='col'></div>
        <div className='col'>
          <button 
           style={{  background:"transparent", color: "#fff", borderBlockColor:"black" ,fontFamily: "'Dancing Script', cursive",fontSize:"30px"}}
          
          variant='primary' onClick={filtering}>
            {" "}
            SHOW ALL TRIPS
          </button>
        </div>
<br></br>
        <div className='col'>
          <input
          style={{backgroundColor:"transparent" , color:"#fff"}}
            type='text'
            onChange={getPrice}
            placeholder='Maximum Price'></input>
        </div>

        <div>
          <button 
          style={{  background:"transparent", color: "#fff", borderBlockColor:"black",fontFamily: "'Dancing Script', cursive",fontSize:"30px"}}
          variant='primary' onClick={filtering}>
            {" "}
            SEARCH TRIPS
          </button>
        </div>
         
      </div>
      <br></br>
      <br></br>

      <div className='row row-cols-6'>
        {trips &&
          trips.map((item) => (
            <div className='col'>
              <Card
                style={{ height:"20rem", marginTop:"3%" }}
                onClick={() => {
                  handleShow(item);
                }}>
                <Card.Img 
                style={{ height:"100%" }}
                variant='top' src={item.images.images[0]} />
              </Card>
            </div>
          ))}
      </div>
      {modalshow()}
    </>
  );
}
