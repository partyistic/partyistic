import React ,{useEffect, useState}from 'react';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import { useHistory } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";

export default function Home(props) {
  const history = useHistory();
    useEffect(() => {
        let get = localStorage.getItem('access_token')
    
        if (!get) { history.push('/login') }
      },[])
   
    return (
        <>  
                <div >
                <Carousel fade  style={{width:"96%", borderRadius:"1%" , marginLeft:"2%"}}>
                        <Carousel.Item interval={1000}>
                          <img
                          style={{height:"850px", borderRadius:"1%" }}
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                          <img
                          style={{height:"850px" , borderRadius:"1%" }}
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1578922864601-79dcc7cbcea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                          <img
                          style={{height:"850px" , borderRadius:"1%" }}
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1425421598808-4a22ce59cc97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                          <img
                          style={{height:"850px" , borderRadius:"1%" }}
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1507503749118-52cfca8e3aa3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                            alt="Third slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item interval={1000}>
                          <img
                          style={{height:"850px" , borderRadius:"1%" }}
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1504437484202-613bb51ce359?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80"
                            alt="Third slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item interval={1000}>
                          <img
                          style={{height:"850px" , borderRadius:"1%" }}
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1604668915840-580c30026e5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1648&q=80"
                            alt="Third slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item interval={1000}>
                          <img
                          style={{height:"850px" , borderRadius:"1%" }}
                            className="d-block w-100"
                            src="https://i.pinimg.com/originals/bf/3e/8d/bf3e8d8e17973b8f850cd5290b2859fe.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>

                        <Carousel.Item interval={1000}>
                          <img
                          style={{height:"850px" , borderRadius:"1%" }}
                            className="d-block w-100"
                            src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2020%2F04%2F17%2Fclass-of-2020-garland-2000.jpg"
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                      </div>



            <div>
                <Nav>
                    <Nav.Link href="/Inspiration"> <Image 
                     style={{height:"500px" ,marginTop:"7%", borderRadius:"1%", width:"1200px", marginLeft:"25%", zIndex:"-1"}}
                     src="https://bubblegumballoons.com/images/large/e04e4ba0866dea99173ef7a517bd40ed.jpg" alt='get inspired!' /></Nav.Link>
                </Nav>

            </div>
        
                <p
                style={{marginTop:"-7%" ,color:"white",fontSize:"80px",  marginLeft:"58%", fontFamily: "'Fleur De Leah', cursive"}}>
                    Get Inspired
                </p>
            
            <div>
                <Nav>
                    <Nav.Link href="/Services"> <Image
                    style={{height:"500px" ,marginTop:"7%", borderRadius:"1%", width:"1200px", marginLeft:"25%", zIndex:"-1"}}
                     src="https://www.lux-review.com/wp-content/uploads/2021/05/Wedding-car.jpg" alt='explore services' /></Nav.Link>
                </Nav>

            </div>
            <p
                 style={{marginTop:"-7%" ,color:"rgb(79,121,66)",fontSize:"80px",  marginLeft:"58%", fontFamily: "'Fleur De Leah', cursive"}}>
                    Our Servises
                </p>
            <div>
                <Nav>
                    <Nav.Link href="/Parties"> <Image 
                     style={{height:"500px" ,marginTop:"7%", borderRadius:"1%", width:"1200px", marginLeft:"25%", zIndex:"-1"}}
                     src="https://cdn.shopify.com/s/files/1/0398/6145/2953/articles/1_b6d13b0b-ba1f-441a-85cd-79d8d0bf66ed_1280x.jpg?v=1592231674" alt='make a part' /></Nav.Link>

                </Nav>

            </div>
            <p
                 style={{marginTop:"-7%" ,color:"white",fontSize:"80px",  marginLeft:"58%", fontFamily: "'Fleur De Leah', cursive"}}>
                    Create Party
                </p>

        </>
    );

}