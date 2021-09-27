import React from 'react';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { useState } from 'react';


export default function BirthdayParty(props) {
  const birthday = [
    { id: 1, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '1', description: 'abc' },
    { id: 2, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '2', description: 'cdf' },
    { id: 3, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '3', description: 'rty' },
    { id: 4, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '4', description: 'jkl' },
    { id: 5, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '5', description: 'qws' },
  ];

  const [showBd, setShowBd] = useState(false);
  const [bd, setBd] = useState(false);

  const handleClose = () => setShowBd(false);
  const handleShow = (bd) => {
    setBd(bd);
    setShowBd(true);
  }


  const modalshow = () => {
    if (showBd) {
      return (
        <>
          <Modal show={showBd} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{bd.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{bd.description}
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={bd.src} />
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={bd.src} />
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={bd.src} />
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
      {birthday && birthday.map((bd, key) => (
        <>

          <Card style={{ width: '18rem' }} onClick={() => { handleShow(bd) }}>
            <Card.Img variant="top" src={bd.src} />
          </Card>

        </>
      ))}
      {modalshow()}
    </>
  );

}