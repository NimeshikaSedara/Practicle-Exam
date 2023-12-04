import React from 'react';
import './App.css';
import './index.js';
import Marquee from 'react-fast-marquee';
import { FaRegEnvelope } from 'react-icons/fa';
import { AiFillEnvironment } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

import sltLogo from './images/sltLogo.jpeg';
import facebook from './images/facebook.jpg';
import twitter from './images/twitter.jpeg';
import linkedin from './images/linkedin.jpg';
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpeg';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="main">
      <Container className='main-container'>


        <div className="navbar">
          <Container>
            <Col xs={10} md={8} sm={9}>
              <Image src={sltLogo} alt="Logo of SLT" className='image_wrapper' thumbnail style={{ width: '300px', height: '125px', marginTop: '20px' }} />
            </Col>
            <Col xs={2} md={4} sm={3}>
              <div className="images" style={{ textAlign: 'center', paddingLeft: '20px' }}>
                <Image src={facebook} alt="Facebook LOGO" className='image_wrapper' roundedCircle style={{ width: '50px', height: '50px', marginLeft: '5%' }} />
                <Image src={twitter} alt="Twitter LOGO" className='image_wrapper' roundedCircle style={{ width: '50px', height: '50px', marginLeft: '5%' }} />
                <Image src={linkedin} alt="LinkeIn LOGO" className='image_wrapper' roundedCircle style={{ width: '50px', height: '50px', marginLeft: '5%' }} />
              </div>
            </Col>
          </Container>
        </div>


        <Container className='text'>
          <Row>
            <Col xs={5} md={12}>
              <h1>SLT Digital Services</h1><br />
              <h3>INTRANET</h3>
            </Col>
          </Row>
        </Container>

        <div className='container'>

          <Card style={{ width: '80%', height: '100%' }}>
            <Card.Body>
              <Card.Title style={{ fontSize: '30px', paddingLeft: '10px' }}><b>Approvel for Pre - Overtime Requests</b></Card.Title>
              <Card.Text style={{ fontSize: '25px' }}>
                Please Login to the Intranet and Approve Pending Requests.
              </Card.Text >
              <Button variant="primary">Proceed</Button>
            </Card.Body>
          </Card>


        </div>

        <div className='container mt-5 pt-5'>
          <Row style={{ paddingTop: '100px' }}>
            <Marquee direction="right" speed={100} delay={5}>
              <div className="image_wrapper">
                <img src={img1} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={img2} alt="" style={{ width: '40%' }} />
              </div>
              <div className="image_wrapper">
                <img src={img3} alt="" />
              </div>
              <div className="image_wrapper">
                <img src={img4} alt="" />
              </div>
            </Marquee>
          </Row>
          <Row></Row>
        </div>

        <div className='contact m-lg-5  '>
          <p> <AiFillEnvironment className="icon location" /> No:17 HK Darmadasa Mawatha, Colombo 02
            <br></br>
            <FaRegEnvelope className='icon mail' /> info@sltds.lk
          </p>
        </div>

        <div className='tel m-md-5 '>
          <p><BsFillTelephoneFill className='icon telephone' /> 0112-399-399</p>
        </div>
      </Container>
    </div>

  );
}

export default App;


