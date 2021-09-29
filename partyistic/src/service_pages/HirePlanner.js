import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { Card, Form } from "react-bootstrap";
import useResourceplanners from "../hook/useServicesPlanners";
import { useState } from "react";

export default function HirePlanner() {
  const originalPlanners = useResourceplanners().plannerresources;

  const [planners, setPlanners] = useState(originalPlanners);
  const App = () => {
    setPlanners(useResourceplanners().plannerresources);
  };

  let city = document.getElementById("city");
  const [selectedCity, setCity] = useState("city");
  const getCityValue = () => {
    setCity(city.options[city.selectedIndex]);
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
        setPlanners([]);
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
          <Modal 
           size="lg"
          show={showPlanner} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title
               style={{fontFamily: "'Dancing Script', cursive", fontSize:"27px"}}
              
              >{planner.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body
            style={{fontFamily: "'Open Sans Condensed', sans-serif", fontSize:"25px"}}
           
            >
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  {planner.description}
                  {planner.images && (
                    <Carousel
                    fade style={{borderRadius:"1%", width:"100%"}}
                    >
                      {planner.images.images &&
                        planner.images.images.map((item) => {
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
  <h1
   style={{ marginTop:"3%", color:"white",marginLeft:"40%", fontFamily: "'Dancing Script', cursive"}}
    
  >Hire a Planner</h1>
  <br></br>
    <br></br>

      <div className='row row-cols-5'>
        <div className='col'>
          <button 
           style={{  background:"transparent", color: "#fff", borderBlockColor:"black" ,fontFamily: "'Dancing Script', cursive",fontSize:"30px"}}
          
          variant='primary' onClick={filtering}>
            {" "}
            SHOW ALL PLANNERS
          </button>
        </div>
        <br></br>
        <div className='col'>
          <Form.Select
          style={{backgroundColor:"transparent" , color:"#fff"}}
            id='city'
            onChange={getCityValue}
            className='col '
            aria-label='Default select example'>
            <option>All Cities</option>
            <option style={{color:"black"}} value='1'>Amman</option>
            <option style={{color:"black"}} value='2'>Zarqa</option>
            <option style={{color:"black"}} value='3'>Irbid</option>
            <option style={{color:"black"}} value='4'>Jarash</option>
          </Form.Select>
        </div>

        <div className='col'>
          <input
          style={{backgroundColor:"transparent" , color:"#fff"}}
            type='text'
            onChange={getPrice}
            placeholder='Maximum Price'></input>
        </div>

        <div className='col'>
          <button 
          style={{  background:"transparent", color: "#fff", borderBlockColor:"black",fontFamily: "'Dancing Script', cursive",fontSize:"30px"}}
          
          variant='primary' onClick={filtering}>
            {" "}
            SEARCH
          </button>
        </div>
      </div>

      <br></br>
      <br></br>
      <div className='row row-cols-6'>
        {planners &&
          planners.map((item) => (
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
