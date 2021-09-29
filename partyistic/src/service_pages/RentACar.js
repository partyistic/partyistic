/** @format */
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { Card, Form } from "react-bootstrap";
import useCars from "../hook/useServicesCars";
import { useState } from "react";

export default function RentACar() {
  const originalCars = useCars().resources;

  const [cars, setCars] = useState(originalCars);
  const App = () => {
    setCars(useCars().resources);
  };

  const [price, setPrice] = useState(200000000000000);
  const getPrice = (event) => {
    setPrice(event.target.value);
  };


  
  let date = document.getElementById("date");
  const [selectedDate, setDate] = useState("Available Date")
  const getDateValue = () => {
    // let selectedCity = city.options[city.selectedIndex];
    setDate(date.options[date.selectedIndex].value)
  };
  console.log(selectedDate);


  let city = document.getElementById("city");
  const [selectedCity, setCity] = useState("City")
  const getCityValue = () => {
    setCity(city.options[city.selectedIndex].value)
  };
  console.log(selectedCity);
  
  function filtering() {
    let lister = [];

    originalCars.map((item) => {
      // console.log(item)
      if ((item.price <= price || item.price == '') && (item.city == selectedCity || selectedCity == "City") && ( item.booked_dates == null || item.booked_dates.dates[0] == selectedDate || item.booked_dates.dates[1] == selectedDate || selectedDate == "Available Date")) {
        lister.push(item);
        // console.log(lister, "trippeieirer");
        // console.log(item.booked_dates)
        setCars(lister);
      } 
      // else {
      //   setCars([])
        
      //   console.log(lister,"trying to sdo it")
      // }
    });
  }

  const [showCar, setShowCar] = useState(false);
  const [car, setCar] = useState(false);
  const handleClose = () => setShowCar(false);
  const handleShow = (car) => {
    setCar(car);
    setShowCar(true);
  };

  const modalshow = () => {
    if (showCar) {
      return (
        <>
          <Modal show={showCar} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{car.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  {car.description}
                  {car.images && (
                    <Carousel>
                      {car.images.images &&
                        car.images.images.map((item) => {
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
                  <Card.Text>Price: {car.price}</Card.Text>
                  <Card.Text>City: {car.city}</Card.Text>
                  <Card.Link href={car.location_link}>Location</Card.Link>
                  <Card.Text>Reviews:</Card.Text>
                  {car.reviews &&
                    car.reviews.reviews.map((review) => (
                      <Card.Text>{review}</Card.Text>
                    ))}
                  <Card.Text>Booked Dates:</Card.Text>
                  {car.booked_dates &&
                    car.booked_dates.dates.map((date) => (
                      <Card.Text>{date}</Card.Text>
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
      <div className='row row-cols-6'>
        <div className='col '></div>

        <div className='col'>
          <Form.Select
          id='city'
            className='col '
            onChange={getCityValue}
            aria-label='Default select example'>
            <option value="City" selected>City</option>
            <option value='Amman'>Amman</option>
            <option value='Zarqa'>Zarqa</option>
            <option value='Irbid'>Irbid</option>
            <option value='Al-Mafraq'>Al-Mafraq</option>
            <option value='Jarash'>Jarash</option>
            <option value='Ajloun'>Ajloun</option>
            <option value='As-Salt'>As-Salt</option>
            <option value='Madaba'>Madaba</option>
            <option value='Karak'>Karak</option>
            <option value='Tafilah'>Tafilah</option>
            <option value='Maan'>Maan</option>
            <option value='Aqaba'>Aqaba</option>


            
          </Form.Select>
        </div>

        <div className='col'>
          <Form.Select className='col' id="date" onChange = {getDateValue} aria-label='Default select example'>
            <option value="Available Date">Available Date</option>
            <option value="2021/19/3">2021/19/3</option>
            <option value='2020/10/1'>2020/10/1</option>
            <option value='2013/31/1'>2013/31/1</option>
            <option value='32011/24/4'>2011/24/4</option>
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

      <h1>Rent a Car</h1>
      <div className='row row-cols-6'>
        {cars &&
          cars.map((item) => (
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
