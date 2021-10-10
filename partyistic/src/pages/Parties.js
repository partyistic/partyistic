/** @format */

import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import useResource from '../hook/UseParties';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import SignIn from '../components/Login';
import Row from 'react-bootstrap/Row';
import { Col, Card, Dropdown } from 'react-bootstrap';
import ImageBrowserForm from '../components/forms/ImageBrowserForm';

export default function Parties() {
  const { resources } = useResource();
  const history = useHistory();
  useEffect(() => {
    let get = localStorage.getItem('access_token');

    if (!get) {
      history.push('/Login');
    }
  }, []);

  let wedding = [];
  let grad = [];
  let birthday = [];
  let special = [];
  let privateParties = [];

  resources &&
    resources.map((item) => {
      item.type == 'Wedding' && item.privacy == 'Public' && wedding.push(item);

      item.type == 'Graduation' && item.privacy == 'Public' && grad.push(item);

      item.type == 'Birthday' &&
        item.privacy == 'Public' &&
        birthday.push(item);

      item.type == 'Special' && item.privacy == 'Public' && special.push(item);

      item.privacy == 'Private' && privateParties.push(item);
    });

  wedding = wedding.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  grad = grad.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  birthday = birthday.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  special = special.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  privateParties = privateParties.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });

  let email = localStorage.getItem('email');
  console.log(wedding, grad, birthday, special, privateParties);

  const [showParty, setShowParty] = useState(false);
  const [Party, setParty] = useState(false);

  const handleCloseDetail = () => setShowParty(false);
  const handleShowDetail = (Party) => {
    setParty(Party);
    setShowParty(true);
  };

  async function createParty(info) {
    console.log('create');
    await axios.post(
      'https://partyistic.herokuapp.com/api/v1/partyistic/parties/',
      info
    );
  }

  const submitParty = (event) => {
    event.preventDefault();
    console.log('submit');
    console.log(event.target.invited_emails.value);
    const invited_emails = event.target.invited_emails.value.split(' ');
    console.log(invited_emails);
    const data = {
      name: event.target.name.value,
      type: event.target.partyType.value,
      description: event.target.description.value,
      images: {
        images: [imageUrl1, imageUrl2, imageUrl3],
      },
      location_link: event.target.location.value,
      city: event.target.city.value,
      privacy: event.target.privacy.value,
      date: event.target.date.value,
      // email: event.target.email.value,
      invited_people: {
        people: invited_emails,
      },
      // owner: 30,
    };
    createParty(data);
    handleCloseCreate();

    setFile1('');
    setImageUrl1('');
    setPercentage1(0);
    setFile2('');
    setImageUrl2('');
    setPercentage2(0);
    setFile3('');
    setImageUrl3('');
    setPercentage3(0);
  };

  const partymodalshow = () => {
    if (showParty) {
      return (
        <>
          <Modal
            size='lg'
            show={showParty}
            onHide={handleCloseDetail}
            animation={false}>
            <Modal.Header closeButton>
              <Modal.Title
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '27px',
                }}>
                {Party.name}
              </Modal.Title>
            </Modal.Header>
            <br></br>
            <Modal.Body
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: '25px',
              }}>
              <Card style={{ width: '100%' }}>
                <Card.Body>
                  {Party.description}
                  {Party.images && (
                    <Carousel
                      fade
                      style={{ borderRadius: '1%', width: '100%' }}>
                      {Party.images.images &&
                        Party.images.images.map((item) => {
                          return (
                            item && (
                              <Carousel.Item>
                                <br></br>
                                <img
                                  style={{ width: '100%' }}
                                  src={item}
                                  alt={item}
                                />
                              </Carousel.Item>
                            )
                          );
                        })}
                    </Carousel>
                  )}
                  <Card.Text>Party Type: {Party.type}</Card.Text>
                  <Card.Text>Privacy: {Party.privacy}</Card.Text>
                  {/* <Card.Text>Party By: {Party.owner}</Card.Text> */}
                  <Card.Text>Date: {Party.date}</Card.Text>
                  <Card.Text>City: {Party.city}</Card.Text>
                  <Card.Text>Party Privacy: {Party.privacy}</Card.Text>
                  <Card.Link href={Party.location_link}>
                    Location Link
                  </Card.Link>
                </Card.Body>
              </Card>
            </Modal.Body>
          </Modal>
        </>
      );
    } else {
      return <> </>;
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showCreateParty, setshowCreateParty] = useState(false);
  const handleCloseCreate = () => setshowCreateParty(false);
  const handleShowCreate = () => setshowCreateParty(true);

  // For uploading image to firebase
  const [file1, setFile1] = useState('');
  const [imageUrl1, setImageUrl1] = useState('');
  const [percentage1, setPercentage1] = useState(0);

  const handelUploadImage1 = () => {
    if (file1) {
      const fd = new FormData();
      fd.append('image', file1, file1.name);
      axios
        .post(
          'https://us-central1-graphite-cell-321207.cloudfunctions.net/uploadFile',
          fd,
          {
            onUploadProgress: (ProgressEvent) => {
              console.log(
                'upload Progress : ' +
                  Math.round(
                    (ProgressEvent.loaded / ProgressEvent.total) * 100
                  ) +
                  '%'
              );

              setPercentage1(
                Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100)
              );
            },
          }
        )
        .then((res) => {
          console.log(res.data.url);
          setImageUrl1(res.data.url);
        });
    }
  };

  const handelOnChangeImage1 = (e) => {
    console.log('onchange', e.target.files[0]);
    setFile1(e.target.files[0]);
  };

  const [file2, setFile2] = useState('');
  const [imageUrl2, setImageUrl2] = useState('');
  const [percentage2, setPercentage2] = useState(0);

  const handelUploadImage2 = () => {
    if (file2) {
      const fd = new FormData();
      fd.append('image', file2, file2.name);
      axios
        .post(
          'https://us-central1-graphite-cell-321207.cloudfunctions.net/uploadFile',
          fd,
          {
            onUploadProgress: (ProgressEvent) => {
              console.log(
                'upload Progress : ' +
                  Math.round(
                    (ProgressEvent.loaded / ProgressEvent.total) * 100
                  ) +
                  '%'
              );

              setPercentage2(
                Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100)
              );
            },
          }
        )
        .then((res) => {
          console.log(res.data.url);
          setImageUrl2(res.data.url);
        });
    }
  };

  const handelOnChangeImage2 = (e) => {
    console.log('onchange', e.target.files[0]);
    setFile2(e.target.files[0]);
  };

  const [file3, setFile3] = useState('');
  const [imageUrl3, setImageUrl3] = useState('');
  const [percentage3, setPercentage3] = useState(0);

  const handelUploadImage3 = () => {
    if (file3) {
      const fd = new FormData();
      fd.append('image', file3, file3.name);
      axios
        .post(
          'https://us-central1-graphite-cell-321207.cloudfunctions.net/uploadFile',
          fd,
          {
            onUploadProgress: (ProgressEvent) => {
              console.log(
                'upload Progress : ' +
                  Math.round(
                    (ProgressEvent.loaded / ProgressEvent.total) * 100
                  ) +
                  '%'
              );

              setPercentage3(
                Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100)
              );
            },
          }
        )
        .then((res) => {
          console.log(res.data.url);
          setImageUrl3(res.data.url);
        });
    }
  };

  const handelOnChangeImage3 = (e) => {
    console.log('onchange', e.target.files[0]);
    setFile3(e.target.files[0]);
  };

  useEffect(() => {
    handelUploadImage1();
  }, [file1]);

  useEffect(() => {
    handelUploadImage2();
  }, [file2]);

  useEffect(() => {
    handelUploadImage3();
  }, [file3]);

  return (
    <>
      <Carousel
        fade
        style={{
          height: '500px',
          borderRadius: '1%',
          width: '1200px',
          marginLeft: '15%',
        }}>
        {resources &&
          resources.map((item) => {
            return (
              item.invited_people &&
              item.invited_people.people.includes(email) && (
                <Carousel.Item>
                  <Carousel.Caption
                    style={{
                      color: 'black',
                      fontSize: '40px',
                      fontFamily: "'Open Sans Condensed', sans-serif",
                    }}>
                    <h1>Invited Parties</h1>
                  </Carousel.Caption>
                  <Card
                    style={{ width: '100%', backgroundColor: 'transparent' }}
                    onClick={() => {
                      handleShowDetail(item);
                    }}>
                    <Card.Img
                      style={{ width: '100%', borderRadius: '1%' }}
                      variant='top'
                      src={item.images.images[0]}
                    />
                  </Card>
                </Carousel.Item>
              )
            );
          })}
      </Carousel>
      <Button
        style={{
          marginTop: '3%',
          marginLeft: '15%',
          color: '#fff',
          fontSize: '30px',
          fontFamily: "'Open Sans Condensed', sans-serif",
          width: '1200px',
          height: '60px',
          marginTop: '20%',
        }}
        variant='outline-secondary'
        onClick={handleShowCreate}>
        Create Your Party
      </Button>
      <h1
        style={{
          marginTop: '3%',
          color: 'white',
          marginLeft: '40%',
          fontFamily: "'Dancing Script', cursive",
        }}>
        {' '}
        Explore Public Parties{' '}
      </h1>

      <Carousel
        fade
        style={{
          borderRadius: '1%',
          width: '1200px',
          marginLeft: '15%',
          marginTop: '3%',
        }}>
        {wedding &&
          wedding.map((item) => {
            return (
              item.images.images[0] && (
                <Carousel.Item>
                  <Carousel.Caption
                    style={{
                      color: 'black',
                      fontSize: '40px',
                      fontFamily: "'Open Sans Condensed', sans-serif",
                    }}>
                    <h1>Wedding Parties</h1>
                  </Carousel.Caption>
                  <Card
                    style={{ width: '100%', backgroundColor: 'transparent' }}
                    onClick={() => {
                      handleShowDetail(item);
                    }}>
                    <Card.Img
                      style={{
                        width: '100%',
                        hight: '100%',
                        borderRadius: '1%',
                      }}
                      variant='top'
                      src={item.images.images[0]}
                    />
                  </Card>
                </Carousel.Item>
              )
            );
          })}
      </Carousel>
      <br></br>
      <br></br>
      <Carousel
        fade
        style={{
          borderRadius: '1%',
          width: '1200px',
          marginLeft: '15%',
          marginTop: '3%',
        }}>
        {grad &&
          grad.map((item) => {
            return (
              item.images.images[0] && (
                <Carousel.Item>
                  <Carousel.Caption
                    style={{
                      color: 'black',
                      fontSize: '40px',
                      fontFamily: "'Open Sans Condensed', sans-serif",
                    }}>
                    <h1>Graduation Parties</h1>
                  </Carousel.Caption>
                  <Card
                    style={{ width: '100%', backgroundColor: 'transparent' }}
                    onClick={() => {
                      handleShowDetail(item);
                    }}>
                    <Card.Img
                      style={{ width: '100%', borderRadius: '1%' }}
                      variant='top'
                      src={item.images.images[0]}
                    />
                  </Card>
                </Carousel.Item>
              )
            );
          })}
      </Carousel>
      <br></br>
      <br></br>
      <Carousel
        fade
        style={{
          borderRadius: '1%',
          width: '1200px',
          marginLeft: '15%',
          marginTop: '3%',
        }}>
        {birthday &&
          birthday.map((item) => {
            return (
              item.images.images[0] && (
                <Carousel.Item>
                  <Carousel.Caption
                    style={{
                      color: 'black',
                      fontSize: '40px',
                      fontFamily: "'Open Sans Condensed', sans-serif",
                    }}>
                    <h1>Birthday Parties</h1>
                  </Carousel.Caption>
                  <Card
                    style={{ width: '100%', backgroundColor: 'transparent' }}
                    onClick={() => {
                      handleShowDetail(item);
                    }}>
                    <Card.Img
                      style={{ width: '100%', borderRadius: '1%' }}
                      variant='top'
                      src={item.images.images[0]}
                    />
                  </Card>
                </Carousel.Item>
              )
            );
          })}
      </Carousel>
      <br></br>
      <br></br>
      <Carousel
        fade
        style={{
          borderRadius: '1%',
          width: '1200px',
          marginLeft: '15%',
          marginTop: '3%',
        }}>
        {special &&
          special.map((item) => {
            return (
              item.images.images[0] && (
                <Carousel.Item>
                  <Carousel.Caption
                    style={{
                      color: 'black',
                      fontSize: '40px',
                      fontFamily: "'Open Sans Condensed', sans-serif",
                    }}>
                    <h1>Special Parties</h1>
                  </Carousel.Caption>
                  <Card
                    style={{ width: '100%', backgroundColor: 'transparent' }}
                    onClick={() => {
                      handleShowDetail(item);
                    }}>
                    <Card.Img
                      style={{ width: '100%', borderRadius: '1%' }}
                      variant='top'
                      src={item.images.images[0]}
                    />
                  </Card>
                </Carousel.Item>
              )
            );
          })}
      </Carousel>

      <Modal show={showCreateParty} onHide={handleCloseCreate}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '30px',
            }}>
            Create a Party
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitParty}>
            <Form.Group className='mb-3' controlId='name'>
              <Form.Control type='text' placeholder='Party Name' required />
            </Form.Group>

            <Form.Group className='mb-3' controlId='partyType'>
              <Form.Select
                aria-label='Default select example'
                controlId='partyType'>
                <option>Party Type</option>
                <option value='Wedding'>Wedding</option>
                <option value='Graduation'>Graduation</option>
                <option value='Birthday'>Birthday</option>
                <option value='Special'>Special</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='description'>
              <Form.Control
                required
                as='textarea'
                placeholder='Add Description'
                style={{ height: '100px' }}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='privacy'>
              Privacy:
              <Form.Check
                controlId='privacy'
                type='radio'
                inline
                label='Public'
                id='Public'
                name='privacy'
                value='Public'
              />
              <Form.Check
                controlId='privacy'
                type='radio'
                inline
                label='Private'
                id='Private'
                name='privacy'
                value='Private'
              />
            </Form.Group>

            <Form.Group as={Row} className='mb-3'>
              <Col sm={{ span: 10, offset: 2 }}>
                <input
                  type='button'
                  value='Add a Photo'
                  onClick={handleShow}
                  required
                />
              </Col>
            </Form.Group>

            <div className='row row-cols-3 '>
              <div className='col'>
                <Card.Img variant='' alt='First image' src='' />
              </div>
              <div className='col'>
                <Card.Img alt='Second image' src='' />
              </div>
              <div className='col'>
                <Card.Img variant='' alt='Third image' src='' />
              </div>
            </div>

            <Form.Group className='mb-3' controlId='location'>
              <Form.Control
                required
                as='textarea'
                placeholder='Location Link'
                // style={{ height: '100px' }}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='city'>
              <Form.Select label='City' controlId='city' required>
                <option>City</option>
                <option value='Amman'>Amman</option>
                <option value='Irbid'>Irbid</option>
                <option value='Zarqa'>Zarqa</option>
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
            </Form.Group>

            <Form.Group className='mb-3' controlId='date'>
              <Form.Control type='date' required />
            </Form.Group>

            <Form.Group className='mb-3' controlId='email'>
              <Form.Control type='email' placeholder='Email' required />
            </Form.Group>

            <Form.Group className='mb-3' controlId='invited_emails'>
              <Form.Control type='text' placeholder='Invite People' />
            </Form.Group>
            <button
              style={{
                background: 'transparent',
                color: 'black',
                borderBlockColor: 'black',
                width: '100%',
                fontFamily: "'Dancing Script', cursive",
                fontSize: '30px',
              }}
              variant='primary'
              type='submit'>
              Submit
            </button>
            {/* style={{background:"transperant" }} */}
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      {partymodalshow()}
      <ImageBrowserForm
        show={show}
        handleClose={handleClose}
        handelUploadImage1={handelUploadImage1}
        handelOnChangeImage1={handelOnChangeImage1}
        handelUploadImage2={handelUploadImage2}
        handelOnChangeImage2={handelOnChangeImage2}
        handelUploadImage3={handelUploadImage3}
        handelOnChangeImage3={handelOnChangeImage3}
      />
    </>
  );
}
