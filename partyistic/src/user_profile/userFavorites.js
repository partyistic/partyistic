/** @format */

import React from 'react';
import { Carousel, Modal, Button, Card } from 'react-bootstrap';
import useResource from '../hook/useServicesCars';
import { useState } from 'react';

export default function UserFavorite() {
  const { resources, loading } = useResource();
  let userFavorites = [];

  resources &&
    resources.map((item) => {
      userFavorites.push(item);
    });
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState(false);
  const handleClose = () => setShowFavorites(false);
  const handleShow = (favorite) => {
    setFavorites(favorite);
    setShowFavorites(true);
  };

  const modalshow = () => {
    if (showFavorites) {
      return (
        <>
          <Modal show={showFavorites} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{favorites.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  {favorites.description}
                  {favorites.images && (
                    <Carousel>
                      {favorites.images.images &&
                        favorites.images.images.map((item) => {
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
                  <Card.Text>Price: {favorites.price}</Card.Text>
                  <Card.Text>Reviews:</Card.Text>
                  {favorites.reviews.reviews.map((review) => (
                    <Card.Text>{review}</Card.Text>
                  ))}
                </Card.Body>
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
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
        <Carousel>
          {userFavorites &&
            userFavorites.map((item) => {
              return (
                item && (
                  <Carousel.Item interval={3000}>
                    <Card
                      style={{ width: '18rem' }}
                      onClick={() => {
                        handleShow(item);
                      }}>
                      <Card.Img variant='top' src={item.images.images[0]} />
                    </Card>
                  </Carousel.Item>
                )
              );
            })}
        </Carousel>

        <div className='col'></div>
      </div>
      {modalshow()}
    </>
  );
}
