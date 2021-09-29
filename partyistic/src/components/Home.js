import React ,{useEffect, useState}from 'react';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();
    useEffect(() => {
        let get = localStorage.getItem('access_token')
    
        if (!get) { history.push('/login') }
      },[])
    return (
        <>
   
            <h1>  Partystic </h1>
            <div>

                <Image src="https://static.billboard.com/files/media/friends-cast-photo-billboard-1548-compressed.jpg" alt='hero image' />
            </div>
            <div>
                <Nav>
                    <Nav.Link href="/Inspiration"> <Image src="https://media.vanityfair.com/photos/5d83e5e46879fa00082e6eb4/4:3/w_480,h_360,c_limit/friends%20the%20routine.gif" alt='get inspired!' /></Nav.Link>
                </Nav>

            </div>
            <div>
                <Nav>
                    <Nav.Link href="/Services"> <Image src="https://media.vanityfair.com/photos/5d83e5e46879fa00082e6eb4/4:3/w_480,h_360,c_limit/friends%20the%20routine.gif" alt='explore services' /></Nav.Link>
                </Nav>

            </div>
            <div>
                <Nav>
                    <Nav.Link href="/Parties"> <Image src="https://media.vanityfair.com/photos/5d83e5e46879fa00082e6eb4/4:3/w_480,h_360,c_limit/friends%20the%20routine.gif" alt='make a part' /></Nav.Link>

                </Nav>

            </div>
       

        </>
    );

}