import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { Nav, Card, Form } from "react-bootstrap";
import usePlaces from "../hook/useServicesPlaces";
import { useState } from "react";

export default function ReservePlace(props) {
  const originalPlaces = usePlaces().resources;

  const [places, setPlaces] = useState(originalPlaces);
  const App = () => {
    setPlaces(usePlaces().resources);
  };

  const [price, setPrice] = useState(200000000000000);
  const getPrice = (event) => {
    setPrice(event.target.value);
  };

  let date = document.getElementById("date");
  const [selectedDate, setDate] = useState("Available Date");
  const getDateValue = () => {
    setDate(date.options[date.selectedIndex].value);
  };
  console.log(selectedDate);

  let city = document.getElementById("city");
  const [selectedCity, setCity] = useState("City");
  const getCityValue = () => {
    setCity(city.options[city.selectedIndex].value);
  };
  console.log(selectedCity);

  let type = document.getElementById("type");
  const [selectedType, setType] = useState("All");
  const getTypeValue = () => {
    setType(type.options[type.selectedIndex].value);
  };
  console.log(selectedType);

  function filtering() {
    let lister = [];

    originalPlaces.map((item) => {
      if (
        (item.price <= price || item.price == "") &&
        (item.city == selectedCity || selectedCity == "City") &&
        (item.booked_dates == null ||
          item.booked_dates.dates[0] == selectedDate ||
          item.booked_dates.dates[1] == selectedDate ||
          selectedDate == "Available Date") &&
        (item.place_type == selectedType || selectedType == "All")
      ) {
        lister.push(item);
        setPlaces(lister);
      } else {
        setPlaces([]);
      }
    });
  }

  const [showPlace, setShowPlace] = useState(false);
  const [place, sePlace] = useState(false);
  const handleClose = () => setShowPlace(false);
  const handleShow = (place) => {
    sePlace(place);
    setShowPlace(true);
  };

  const modalshow = () => {
    if (showPlace) {
      return (
        <>
          <Modal show={showPlace} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{place.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  {place.description}
                  {place.images && (
                    <Carousel>
                      {place.images.images &&
                        place.images.images.map((item) => {
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

                  <Card.Text>Place Type: {place.place_type}</Card.Text>
                  <Card.Text>Price: {place.price}</Card.Text>
                  <Card.Text>City: {place.city}</Card.Text>
                  <Card.Link href={place.location_link}>Location</Card.Link>
                  <Card.Text>Reviews:</Card.Text>
                  {place.reviews &&
                    place.reviews.reviews.map((review) => (
                      <Card.Text>{review}</Card.Text>
                    ))}
                  <Card.Text>Booked Dates:</Card.Text>
                  {place.booked_dates &&
                    place.booked_dates.dates.map((date) => (
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
      <div className='row row-cols-7'>
        <div className='col'></div>

        <div className='col'>
          <Button variant='primary' onClick={filtering}>
            {" "}
            SHOW ALL PLACES
          </Button>
        </div>

        <div className='col'>
          <Form.Select
            className='col'
            id='type'
            onChange={getTypeValue}
            aria-label='Default select example'>
            <option value='All'>All</option>
            <option value='Hall'>Hall</option>
            <option value='Restaurant'>Restaurant</option>
            <option value='Farm'>Farm</option>
          </Form.Select>
        </div>

        <div className='col'>
          <Form.Select
            id='city'
            className='col'
            onChange={getCityValue}
            aria-label='Default select example'>
            <option value='City' selected>
              City
            </option>
            <option value='Amman'>Amman</option>
            <option value='Zarqa'>Zarqa</option>
            <option value='Irbid'>Irbid</option>
            <option value='Al-Mafraq'>Al-Mafraq</option>
            <option value='Jarash'>Jarash</option>
            <option value='Ajloun'>Ajloun</option>
            <option value='As-Salt'>As-Salt</option>
            <option value='Madaba'>Madaba</option>
            <option value='karak'>karak</option>
            <option value='Tafilah'>Tafilah</option>
            <option value='Maan'>Maan</option>
            <option value='Aqaba'>Aqaba</option>
          </Form.Select>
        </div>

        <div className='col'>
          <Form.Select
            className='col'
            id='date'
            onChange={getDateValue}
            aria-label='Default select example'>
            <option value='Available Date'>Available Date</option>
            <option value='2021/19/3'>2021/19/3</option>
            <option value='2020/10/1'>2020/10/1</option>
            <option value='2013/31/1'>2013/31/1</option>
            <option value='32011/24/4'>2011/24/4</option>
          </Form.Select>
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

      <h1>Reserve A Place</h1>

      <div className='row row-cols-6'>
        {places &&
          places.map((item) => (
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
