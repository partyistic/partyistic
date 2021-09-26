'use strict';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub } from "react-icons/fa"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

export default function Footer()  {
    
     return (
        <>
        <div>
        <section className="ingredientFooter"></section>
        <div className="main-footer">
          <div className="container2">
            <div className="row">
              <div className="col">
                <ul className="list-unstyled">
                  <li>www.partystic.info.com</li>
                  <li>partyistic@Info.com</li>
                  <li>+962789875799</li>
                  <li>+962505558</li>
                </ul>
              </div>
              <div className="col">
                
              </div>
              <div className="col">
                <h4>Contact Us</h4>
                <ul className="list-unstyled">
                  <li><FaFacebook /> Facebook</li>
                  <li><FaTwitter /> Twitter</li>
                  <li><FaInstagram/> Instegram</li>
                  <li><FaGithub /> Github</li>
                </ul>
              </div>
            </div>
          </div>
          <div>&copy; {new Date().getFullYear} Partyistic INC.| All right reserved | Terms OF Service | Privacy </div>


        </div>
      </div>

        </>
      );
    
  }
  