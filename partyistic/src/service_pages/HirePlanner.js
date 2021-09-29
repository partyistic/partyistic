/** @format */
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { Card, Form } from "react-bootstrap";
import usePlanners from "../hook/useServicesPlanners";
import { useState } from "react";

export default function HirePlanner() {

  const originalPlanners = usePlanners().resources;


  const [planners, setPlanners] = useState(originalPlanners);
  const App = () => {
    setPlanners(usePlanners().resources);
  };
  

  
  let city = document.getElementById("city");
    const [selectedCity, setCity] = useState("city")
    const getCityValue = () => {
      // let selectedCity = city.options[city.selectedIndex];
      setCity(city.options[city.selectedIndex])
    };
    console.log(selectedCity);



  function filtering() {
    let lister = [];

    originalPlanners.map((item) => {
      if (item.price <= price) {
        lister.push(item);
        console.log(lister, "trippeieirer");
        setPlanners(lister);
      } else {
        setPlanners(lister);
      }
    });
  }

  const [showPlanner, setShowPlanner] = useState(false);
  const [planner, setPlanner] = useState(false);
  const handleClose = () => setShowPlanner(false);
  const handleShow = (planner) => {
    setPlanner(planner);
    setShowPlanner(true);
  };

  const [price, setPrice] = useState(2000000000);
  const getPrice = (event) => {
    setPrice(event.target.value);
  };

  const modalshow = () => {
    if (showPlanner) {
      return (
        <>
          <Modal show={showPlanner} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{planner.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  {planner.description}
                  {planner.images && (
                    <Carousel>
                      {planner.images.images &&
                        planner.images.images.map((item) => {
                          return (
                            item && (
                              <Carousel.Item interval={3000}>
                                <img src={item} alt={item} />
                              </Carousel.Item>
                            )
                          );
                        })}
                    </Carousel>
                  )}
                  <Card.Text>Price: {planner.price}</Card.Text>
                  <Card.Text>Reviews:</Card.Text>
                  {planner.reviews &&
                    planner.reviews.reviews.map((review) => (
                      <Card.Text>{review}</Card.Text>
                    ))}
                </Card.Body>
              </Card>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </>
      );
    } else {
      return <> </>;
    }
  };

  return (
    <>
      <div className='row row-cols-5'>
        <div className='col '></div>

        <div className='col'>
          <Form.Select
            id='city'
            onChange={getCityValue}
            className='col '
            aria-label='Default select example'>
            <option>All Cities</option>
            <option value='1'>Amman</option>
            <option value='2'>Zarqa</option>
            <option value='3'>Irbid</option>
            <option value='4'>Jarash</option>
          </Form.Select>
        </div>

        <div className='col'>
          <Button variant='primary' onClick={filtering}>
            {" "}
            ALL TRIPS
          </Button>
        </div>

        <div className='col'>
          <input
            type='text'
            onChange={getPrice}
            placeholder='Maximum Price'></input>
        </div>

        <div className='col'>
          <Button variant='primary' onClick={filtering}>
            {" "}
            SEARCH
          </Button>
        </div>
      </div>

      <h1>Hire a Planner</h1>

      <div className='row row-cols-6'>
        {planners &&
          planners.map((item) => (
            <div className='col'>
              <Card
                style={{ width: "18rem" }}
                onClick={() => {
                  handleShow(item);
                }}>
                <Card.Img variant='top' src={item.images.images[0]} />
              </Card>
            </div>
          ))}
      </div>
      {modalshow()}
    </>
  );
}
