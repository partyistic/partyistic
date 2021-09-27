import React from 'react';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { useState } from 'react';

export default function SpecialParty(props) {
  const special = [
    { id: 1, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '1', description: 'abc' },
    { id: 2, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '2', description: 'cdf' },
    { id: 3, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '3', description: 'rty' },
    { id: 4, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '4', description: 'jkl' },
    { id: 5, src: 'https://d1qxviojg2h5lt.cloudfront.net/images/01ETTD1GWV2FZVP2SASMA1EYN2/FriendsRoutine.png', src1: '', src2: '', src3: '', title: '5', description: 'qws' },
  ];

  const [showSpe, setShowSpe] = useState(false);
  const [spe, setSpe] = useState(false);

  const handleClose = () => setShowSpe(false);
  const handleShow = (spe) => {
    setSpe(spe);
    setShowSpe(true);
  }


  const modalshow = () => {
    if (showSpe) {
      return (
        <>
          <Modal show={showSpe} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{spe.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{spe.description}
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={spe.src1} />
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={spe.src2} />
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={spe.src3} />
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
      {special && special.map((spe, key) => (
        <>

          <Card style={{ width: '18rem' }} onClick={() => { handleShow(spe) }}>
            <Card.Img variant="top" src={spe.src} />
          </Card>

        </>
      ))}
      {modalshow() }
    </>
  );

}