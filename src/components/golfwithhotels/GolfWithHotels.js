import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import Golfwithhotelblock from "../golfwithhotelblock/golfwithhotelblock";
import Featuredslder from "../featuredslider/featuredslider";
import {MdGolfCourse} from "@react-icons/all-files/md/MdGolfCourse";
import {FaRegCalendarAlt} from "@react-icons/all-files/fa/FaRegCalendarAlt";
import {FaRegClock} from "@react-icons/all-files/fa/FaRegClock";
import {FaEnvelope} from "@react-icons/all-files/fa/FaEnvelope";
import {FaUserAlt} from "@react-icons/all-files/fa/FaUserAlt";
import {FaMapMarkerAlt} from "@react-icons/all-files/fa/FaMapMarkerAlt";
import {FaUserPlus} from "@react-icons/all-files/fa/FaUserPlus";
import herobg from "../../images/slider-1.png";
import { useStaticQuery, graphql } from 'gatsby'

export default function GolfWithHotel() {

  const data = useStaticQuery(graphql`
    query {
      wpcontent {
        venue(id: "cG9zdDo3Ng==") {
          title
          id
          acf_venueprice {
            pricePerPersonBottomWeekend
          }
          acf_venuefactsheet {
            shortDetails
            venueMultipleImagesSlider {
              addImage {
                sourceUrl
              }
            }
          }
        }
        venues {
          edges {
            node {
              id
              slug
              title
              acf_venueavaliable {
                venueIsApplicableFor
              }
              acf_venuefactsheet {
                shortDetails
                venueMultipleImagesSlider {
                  addImage {
                    sourceUrl
                  }
                }
              }
              acf_venueprice {
                pricePerPersonWeekday
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <section className="hero-banner-short">
        <img src={herobg} className="img-fluid" alt="herobg" />

        <h2 className="page-title text-white">
          <b>Golfing</b> &<b> Holidays in the East</b>
        </h2>

        <div className="contact-fomr">
          <Container>
            <Row>
              <Col xs={12}>
                <h4 className="text-uppercase font-24 mb-3">Contact us now</h4>
              </Col>

              <Col md={4} lg={3}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="name" placeholder="NAME" />

                  <span>
                    <FaUserAlt />
                  </span>
                </Form.Group>
              </Col>

              <Col md={4} lg={3}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="E-MAIL" />

                  <span>
                    <FaEnvelope />
                  </span>
                </Form.Group>
              </Col>

              <Col md={4} lg={3}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="HOW MANY DAYS?" />

                  <span>
                    <FaRegClock />
                  </span>
                </Form.Group>
              </Col>

              <Col md={4} lg={3}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="ROUNDS OF GOLF" />

                  <span>
                    <MdGolfCourse />
                  </span>
                </Form.Group>
              </Col>

              <Col md={4} lg={3}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="DD / MM / YYYY" />

                  <span>
                    <FaRegCalendarAlt />
                  </span>
                </Form.Group>
              </Col>

              <Col md={4} lg={3}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="HOW MANY PEOPLE?" />

                  <span>
                    <FaUserPlus />
                  </span>
                </Form.Group>
              </Col>

              <Col md={4} lg={3}>
                <Form.Group controlId="FaUserPlus">
                  <Form.Control type="text" placeholder="HOTEL LOCATION" />

                  <span>
                    <FaMapMarkerAlt />
                  </span>
                </Form.Group>
              </Col>

              <Col md={4} lg={3}>
                <Button className="search">Send Now</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <div className="clearfix"></div>

      <section className="featured-hotel commanPaddding ">
        <Container>
          <div className="featured-slide">
            <div className="featured-porp-1">
              <div className="featured-slide-lr">
                <span className="f-badge-1 ">featured</span>

                <span className="f-badge-2 ">20 % Off</span>

                <div className="slide-height-50">
                  <Featuredslder />
                </div>
              </div>

              <div className="featured-slide-lr d-flex align-items-center justify-content-center">
                <div className="new-box">
                  <div className="green-room">
                    <h3>{data.wpcontent.venue.title}</h3>

                    <p className="text-justify">
                      {data.wpcontent.venue.acf_venuefactsheet.shortDetails}
                    </p>

                    <div className="golf-bio">
                      <Row>
                        <Col lg={8} md={9} xs={7}>
                          <div className="golf-houe">
                            <p className="mb-0">
                              <strong>The price starts from</strong>
                            </p>
                            <h3 className="green-color mb-0">
                              <strong>{data.wpcontent.venue.acf_venueprice.pricePerPersonBottomWeekend}</strong>
                            </h3>
                          </div>
                        </Col>

                        <Col lg={4} md={3} xs={5}>
                          <div className="price text-right">
                            <a href="#" className="book-btn new-wi">
                              Book now
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="featured-porp-1">
              <div className="content-info"></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="softing-filter commanPaddding pt-0">
        <Container>
          <Row>
            <Col md={12}>
              <div className="softing-bar">
                <Form.Group>
                  <Form.Label as="legend" className="text-uppercase">
                    sort by:
                  </Form.Label>

                  <div className="radio-custom">
                    <Form.Check
                      type="radio"
                      label="Destination"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      type="radio"
                      label="Price"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                  </div>
                </Form.Group>
              </div>
            </Col>

            <Col md={12}>
              <Row>
                {
                  data.wpcontent.venues.edges
                  .filter(f => f.node.acf_venueavaliable.venueIsApplicableFor != 'For Hotel').map(a => 
                   
                    <Col md={6}>
                      <Golfwithhotelblock 
                        title={a.node.title} 
                        detail={a.node.acf_venuefactsheet.shortDetails} 
                        price={a.node.acf_venueprice.pricePerPersonWeekday} 
                        />
                    </Col>
                  )
                }
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
