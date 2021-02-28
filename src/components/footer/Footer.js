import React, {Component} from "react";
import logo from "../../images/logo.png";
import {FaAngleUp} from "@react-icons/all-files/fa/FaAngleUp";
import {Container, Row, Col, Button, Form} from "react-bootstrap";

import {FaMapMarkerAlt} from "@react-icons/all-files/fa/FaMapMarkerAlt";
import {FaPhoneAlt} from "@react-icons/all-files/fa/FaPhoneAlt";
import {FaEnvelope} from "@react-icons/all-files/fa/FaEnvelope";
import {FaUserAlt} from "@react-icons/all-files/fa/FaUserAlt";
import {FaPencilAlt} from "@react-icons/all-files/fa/FaPencilAlt";


export default class Footer extends Component {
  render() {
    return (
      <div>
        <section className="getintouch commanPaddding">
          <Container>
            <Row>
              <Col md={12}>
                <h2 className="site-title text-uppercase ">
                  <strong> get in touch </strong>
                </h2>
              </Col>

              <Col md={12}>
                <div className="addressinfo">
                  <div className="map60">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.206653559076!2d-73.98294068473615!3d40.60326397934387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244fdbc819f7b%3A0x1d58a6a5b52c5b79!2sHighlawn%20Ave%2C%20Brooklyn%2C%20NY%2011223%2C%20USA!5e0!3m2!1sen!2sin!4v1610010061906!5m2!1sen!2sin"></iframe>
                  </div>

                  <div className="map40">
                    <div className="map-address">
                      <h4>address</h4>
                      <ul className="address-info">
                        <li>
                          <span>
                            <FaMapMarkerAlt />
                          </span>
                          1234 Address, City Goes Here
                        </li>
                        <li>
                          <span>
                            <FaPhoneAlt />
                          </span>
                          (xx) 123 456 789 | (xx) 123 456 789{" "}
                        </li>
                        <li>
                          <span>
                            <FaEnvelope />
                          </span>
                          email@golfasia.dk
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="contact-form mt-5 text-white">
                  <Row>
                    <Col
                      md={2}
                      className="d-flex justify-content-between align-items-center"
                    >
                      <h5>Send us a message</h5>
                    </Col>

                    <Col md={4}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="name" placeholder="NAME" />

                        <span>
                          <FaUserAlt />
                        </span>
                      </Form.Group>

                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="E-MAIL" />

                        <span>
                          <FaEnvelope />
                        </span>
                      </Form.Group>

                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="number" placeholder="PHONE" />

                        <span>
                          <FaPhoneAlt />
                        </span>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          as="textarea"
                          rows={8}
                          placeholder="MESSAGE"
                        />
                        <span>
                          <FaPencilAlt />
                        </span>
                      </Form.Group>

                      <Button className="btn-orange-sendmg mr-0 ml-auto">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <footer className="dynamic-footer">
          <div className="footer-logo ">
            <a href="#">
              <img src={logo} className="img-fluid" />
            </a>
          </div>

          <div className="container">
            <div className="copyright text-uppercase">
              <ul className="foot-menu">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Areas </a>
                </li>
                <li>
                  <a href="#">Golf With Hotel</a>
                </li>
                <li>
                  <a href="#">Golf Courses & Rates</a>
                </li>
                <li>
                  <a href="#">Hotels </a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>

              <p>copyright 2020 - golfasia</p>
            </div>
          </div>
        </footer>

        <a href="#" className="uparoow">
          <FaAngleUp />
        </a>
      </div>
    );
  }
}
