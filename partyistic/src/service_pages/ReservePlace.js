import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { Nav, Card, Form } from "react-bootstrap";
import { useState } from "react";
import useResourceplaces from "../hook/useServicesPlaces";
export default function ReservePlace(props) {
  const originalPlaces = useResourceplaces().placeresources;

  const [places, setPlaces] = useState(originalPlaces);
  const App = () => {
    setPlaces(useResourceplaces().placeresources);
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
          <Modal 
          size="lg"
          show={showPlace} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title
              style={{fontFamily: "'Dancing Script', cursive", fontSize:"27px"}}
              
              >{place.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body
            style={{fontFamily: "'Open Sans Condensed', sans-serif", fontSize:"25px"}}
           
            >
              <Card style={{ width: '100%' }}>
                <Card.Body>
                  {place.description}
                  {place.images && (
                    <Carousel
                    fade style={{borderRadius:"1%", width:"100%"}}
                    
                    >
                      {place.images.images &&
                        place.images.images.map((item) => {
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
    <h1
    style={{ marginTop:"3%", color:"white",marginLeft:"40%", fontFamily: "'Dancing Script', cursive"}}
    >Reserve A Place</h1>
    <br></br>
    <br></br>
      <div className='row row-cols-7'>
        {/* <div className='col'></div> */}

        <div className='col'>
          <button 
          style={{  background:"transparent", color: "#fff", borderBlockColor:"black" ,fontFamily: "'Dancing Script', cursive",fontSize:"30px"}}
          variant='primary' onClick={filtering}>
            {" "}
            SHOW ALL PLACES
          </button>
        </div>
        <br></br>
        <div className='col'>
          <Form.Select
          style={{backgroundColor:"transparent" , color:"#fff"}}
            className='col'
            id='type'
            onChange={getTypeValue}
            aria-label='Default select example'>
            <option style={{color:"black"}} value='All'>All</option>
            <option style={{color:"black"}} value='Hall'>Hall</option>
            <option style={{color:"black"}} value='Restaurant'>Restaurant</option>
            <option style={{color:"black"}} value='Farm'>Farm</option>
          </Form.Select>
        </div>

        <div className='col'>
          <Form.Select
          style={{backgroundColor:"transparent" , color:"#fff"}}
            id='city'
            className='col'
            onChange={getCityValue}
            aria-label='Default select example'>
            <option value='City' selected>
              City
            </option>
            <option style={{color:"black"}} value='Amman'>Amman</option>
            <option style={{color:"black"}} value='Zarqa'>Zarqa</option>
            <option style={{color:"black"}} value='Irbid'>Irbid</option>
            <option style={{color:"black"}} value='Al-Mafraq'>Al-Mafraq</option>
            <option style={{color:"black"}} value='Jarash'>Jarash</option>
            <option style={{color:"black"}} value='Ajloun'>Ajloun</option>
            <option style={{color:"black"}} value='As-Salt'>As-Salt</option>
            <option style={{color:"black"}} value='Madaba'>Madaba</option>
            <option style={{color:"black"}} value='karak'>karak</option>
            <option style={{color:"black"}} value='Tafilah'>Tafilah</option>
            <option style={{color:"black"}} value='Maan'>Maan</option>
            <option style={{color:"black"}} value='Aqaba'>Aqaba</option>
          </Form.Select>
        </div>

        <div className='col'>
          <Form.Select
          style={{backgroundColor:"transparent" , color:"#fff"}}
            className='col'
            id='date'
            onChange={getDateValue}
            aria-label='Default select example'>
            <option style={{color:"black"}} value='Available Date'>Available Date</option>
            <option style={{color:"black"}} value='2021/19/3'>2021/19/3</option>
            <option style={{color:"black"}} value='2020/10/1'>2020/10/1</option>
            <option style={{color:"black"}} value='2013/31/1'>2013/31/1</option>
            <option style={{color:"black"}} value='32011/24/4'>2011/24/4</option>
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
        {places &&
          places.map((item) => (
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
