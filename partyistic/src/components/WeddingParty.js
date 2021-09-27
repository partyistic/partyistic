import React from 'react';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { useState } from 'react';

export default function WeddingParty(props) {
  const wedding = [
    { id: 1, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '1', description: 'abc' },
    { id: 2, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '2', description: 'cdf' },
    { id: 3, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '3', description: 'rty' },
    { id: 4, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '4', description: 'jkl' },
    { id: 5, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '5', description: 'qws' },
  ];

  const [showWed, setShowWed] = useState(false);
  const [wed, setWed] = useState(false);

  const handleClose = () => setShowWed(false);
  const handleShow = (wed) => {
    setWed(wed);
    setShowWed(true);
  }


  const modalshow = () => {
    if (showWed) {
      return (
        <>
          <Modal show={showWed} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{wed.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{wed.description}
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={wed.src1} />
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={wed.src2} />
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={wed.src3} />
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
      {wedding && wedding.map((wed, key) => (
        <>

          {console.log(wed, key)}
          <Card style={{ width: '18rem' }} onClick={() => { handleShow(wed) }}>
            <Card.Img variant="top" src={wed.src} />
          </Card>

        </>
      ))}
      {modalshow() }
    </>
  );

}