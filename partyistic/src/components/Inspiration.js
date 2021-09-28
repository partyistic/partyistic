/** @format */

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import useResource from '../hook/useInspiration';
import { useAuth } from '../Auth';

export default function Inspiration(props) {
  const { resources, loading } = useResource();
  const { user } = useAuth();

  let wedding = [];
  let grad = [];
  let birthday = [];
  let special = [];

  resources &&
    resources.map((item) => {
      item.type == 'Wedding' && wedding.push(item);

      item.type == 'Graduation' && grad.push(item);

      item.type == 'Birthday' && birthday.push(item);

      item.type == 'Special' && special.push(item);
    });

  wedding = wedding.reverse();
  grad = grad.reverse();
  birthday = birthday.reverse();
  special = special.reverse();
  console.log(wedding, grad, birthday, special);

  return (
    <>
      <h1>Get Inspired!</h1>
      <Carousel>
        {resources &&
          resources.map((item) => {
            return (
              item.images.images[0] && (
                <Carousel.Item interval={3000}>
                  {console.log(item.images.images[0])}
                  <img
                    src={item.images.images[0]}
                    alt={item.images.images[0]}
                  />
                </Carousel.Item>
              )
            );
          })}
      </Carousel>

      <h1> Wedding parties </h1>
      {wedding &&
        wedding.map(
          (item, key) =>
            key < 3 && (
              <Nav>
                <Nav.Link href='/inspiration/weddingparties'>
                  {' '}
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={item.images.images[0]} />
                  </Card>
                </Nav.Link>
              </Nav>
            )
        )}

      <h1> Graduation Parties </h1>
      {grad &&
        grad.map(
          (item, key) =>
            key < 3 && (
              <Nav>
                <Nav.Link href='/inspiration/gradparties'>
                  {' '}
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={item.images.images[0]} />
                  </Card>
                </Nav.Link>
              </Nav>
            )
        )}

      <h1> Birthday Parties </h1>
      {birthday &&
        birthday.map(
          (item, key) =>
            key < 3 && (
              <Nav>
                <Nav.Link href='/inspiration/birthdayparties'>
                  {' '}
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={item.images.images[0]} />
                  </Card>
                </Nav.Link>
              </Nav>
            )
        )}

      <h1> Special Parties</h1>
      {special &&
        special.map(
          (item, key) =>
            key < 3 && (
              <Nav>
                <Nav.Link href='/inspiration/specialparties'>
                  {' '}
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant='top' src={item.images.images[0]} />
                  </Card>
                </Nav.Link>
              </Nav>
            )
        )}
    </>
  );
}
