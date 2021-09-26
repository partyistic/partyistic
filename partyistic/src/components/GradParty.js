import React from 'react';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { useState } from 'react';


export default function GradParty(props) {
  const grad = [
    { id: 1, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '1', description: 'abc' },
    { id: 2, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '2', description: 'cdf' },
    { id: 3, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '3', description: 'rty' },
    { id: 4, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '4', description: 'jkl' },
    { id: 5, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '5', description: 'qws' },
  ];

  const [showgrad, setShowGrad] = useState(false);
  const [gd, setGrad] = useState(false);

  const handleClose = () => setShowGrad(false);
  const handleShow = (gd) => {
    setGrad(gd);
    setShowGrad(true);
  }


  const modalshow = () => {
    if (showgrad) {
      return (
        <>
          <Modal show={showgrad} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{gd.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{gd.description}
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={gd.src1} />
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={gd.src2} />
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={gd.src3} />
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )
    }
    else {
      return <> </>
    }
  }
  return (
    <>
      {grad && grad.map((gd, key) => (
        <>

          <Card style={{ width: '18rem' }} onClick={() => { handleShow(gd) }}>
            <Card.Img variant="top" src={gd.src} />
          </Card>

        </>
      ))}
      {modalshow()}
    </>
  );

}