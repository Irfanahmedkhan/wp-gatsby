import React, {useRef} from "react";
import Slider from "react-slick";
import {useStaticQuery, graphql, Link} from "gatsby";
import Golfwithsliderhotel from "../golfwithhotelslider/golfwithhotelslider";
import Testimonialslider from "../testimonialslider/testimonialslider";

import {Container, Row, Col, Tabs, Tab, Button, Form} from "react-bootstrap";

import {FaRegCalendarAlt} from "@react-icons/all-files/fa/FaRegCalendarAlt";
// import { FaPencilAlt  } from "@react-icons/all-files/fa/FaPencilAlt";
// import { FaUserAlt  } from "@react-icons/all-files/fa/FaUserAlt";
// import { FaEnvelope  } from "@react-icons/all-files/fa/FaEnvelope";
// import { FaPhoneAlt  } from "@react-icons/all-files/fa/FaPhoneAlt";
import {FaStarHalfAlt} from "@react-icons/all-files/fa/FaStarHalfAlt";
import {FaStar} from "@react-icons/all-files/fa/FaStar";
import {FaRegClock} from "@react-icons/all-files/fa/FaRegClock";
// import { FaPercent  } from "@react-icons/all-files/fa/FaPercent";
import {FaMapMarkerAlt} from "@react-icons/all-files/fa/FaMapMarkerAlt";
import {FaChevronRight} from "@react-icons/all-files/fa/FaChevronRight";
import {FaChevronLeft} from "@react-icons/all-files/fa/FaChevronLeft";
// import { BiLike  } from "@react-icons/all-files/bi/BiLike";
// import { BiSupport  } from "@react-icons/all-files/bi/BiSupport";

import slideimg from "../../images/slider-1.png";
import destimage from "../../images/destication.png";

import featureimg from "../../images/featured.png";

import high1 from "../../images/sale.png";
import high2 from "../../images/24-hr.png";
import high3 from "../../images/clock.png";
import high4 from "../../images/like.png";

// import TabContent from 'react-bootstrap/TabContent';

export default function PreviousNextMethods() {
  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  const data = useStaticQuery(graphql`
    query {
      wpcontent {
        venues(first: 6) {
          edges {
            node {
              id
              title
              slug
              acf_venuefactsheet {
                shortDetails
                venueMoreDetails
                venueMidTitle
                location
                holesPairsLength
                founded
                designer
                distance
                golfCarts
                bearing
                golfShoes
                umbrella
                maxNumberOfPlayersPerGroup
                open
                drivingRange
                amenties
                venueMultipleImagesSlider {
                  addImage {
                    sourceUrl
                  }
                }
              }
              acf_venueprice {
                pricePerPersonWeekday
                pricePerPersonWeekend
              }
              acf_venueavaliable {
                venueIsApplicableFor
              }
            }
          }
        }
      }
    }
  `);
  return (
    <div className="main">
      <div className="home-slider">
        <Slider ref={(c) => (slider.current = c)} {...settings}>
          <div>
            <div className="images-caption">
              <img src={slideimg} className=" img-fluid" alt="language" />

              <div className="overlay-text text-center text-white">
                <h1 className="heading text-uppercase">Banyan Golf Hua Hin</h1>
                <h6 className="sub-heading text-uppercase">
                  <FaMapMarkerAlt />
                  Thailand
                </h6>

                <ul className="action-btn">
                  <li>
                    <a href="#" className="book-btn">
                      Book now
                    </a>
                  </li>
                  <li>
                    <a href="#" className="learn-btn">
                      Learn More
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="images-caption">
              <img src={slideimg} className=" img-fluid" alt="language" />

              <div className="overlay-text text-center text-white">
                <h1 className="heading text-uppercase">Banyan Golf Hua Hin</h1>
                <h6 className="sub-heading text-uppercase">
                  <FaMapMarkerAlt />
                  Thailand
                </h6>

                <ul className="action-btn">
                  <li>
                    <a href="#" className="book-btn">
                      Book now
                    </a>
                  </li>
                  <li>
                    <a href="#" className="learn-btn">
                      Learn More
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Slider>

        <ul className="slidebtn">
          <li>
            <button className="home-prev" onClick={previous}>
              <FaChevronLeft />
            </button>
          </li>
          <li>
            <button className="home-next" onClick={next}>
              <FaChevronRight />
            </button>
          </li>
        </ul>
      </div>

      <section className="filter-category">
        <Container className="container-new">
          <div className="mcustom-filter">
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Golf Only " className="golf-icon">
                <div className="green-box">
                  <Row>
                    <Col md={6} lg={3}>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="WHERE"
                          className="location-icon"
                        />

                        <span className="custom-icon">
                          <FaMapMarkerAlt />
                        </span>
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={3}>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="WHEN"
                          className="location-date"
                        />

                        <span className="custom-icon">
                          <FaRegCalendarAlt />
                        </span>
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={3}>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="HOW LONG"
                          className="location-time"
                        />
                        <span className="custom-icon">
                          <FaRegClock />
                        </span>
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={3}>
                      <Button className="search">search now</Button>
                    </Col>
                  </Row>
                </div>
              </Tab>
              <Tab
                eventKey="profile"
                title="Golf + Hotel"
                className="hotel-icon"
              >
                <div className="green-box">
                  <Row>
                    <Col md={6} lg={3}>
                      <Form.Group>
                        <Form.Control type="text" placeholder="WHERE" />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={3}>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="WHEN"
                          className="date-icon"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={3}>
                      <Form.Group>
                        <Form.Control type="time" placeholder="HOW LONG" />
                      </Form.Group>
                    </Col>

                    <Col md={6} lg={3}>
                      <Button className="search">search now</Button>
                    </Col>
                  </Row>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Container>

        <Container>
          <div className="highlight-box pb-5 pt-5">
            <Row>
              <Col lg={3} md={6} xs={6}>
                <h3 className="hight-light-text text-uppercase ">
                  <span className="green-color">
                    <img src={high1} className="img-fluid" alt="best price" />
                  </span>
                  &nbsp;&nbsp;best price
                </h3>
              </Col>

              <Col lg={3} md={6} xs={6}>
                <h3 className="hight-light-text text-uppercase">
                  <span className="green-color">
                    <img src={high2} className="img-fluid" alt="best price" />{" "}
                  </span>
                  &nbsp;&nbsp;24/7 support
                </h3>
              </Col>

              <Col lg={3} md={6} xs={6}>
                <h3 className="hight-light-text text-uppercase ">
                  <span className="green-color">
                    <img src={high3} className="img-fluid" alt="best price" />{" "}
                  </span>{" "}
                  &nbsp;&nbsp;save time
                </h3>
              </Col>

              <Col lg={3} md={6} xs={6}>
                <h3 className="hight-light-text text-uppercase ">
                  <span className="green-color">
                    <img src={high4} className="img-fluid" alt="best price" />{" "}
                  </span>{" "}
                  &nbsp;&nbsp;100% recommended
                </h3>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* popular golfcourse */}

      <section className="popular-golf commanPaddding">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-title text-uppercase ">
                <strong> Popular </strong>golf destinations
              </h2>
            </Col>

            <Col md={12}>
              <ul className="popular-dest">
                {data.wpcontent.venues.edges.map((venue) => (
                  <li key={venue.node.id}>
                    <span className="featured-badge">
                      <img src={featureimg} className="img-fluid" />
                    </span>
                    <img
                      src={
                        venue.node.acf_venuefactsheet
                          .venueMultipleImagesSlider[0].addImage.sourceUrl
                      }
                      className="img-box"
                    />

                    <div className="product-inquiry">
                      <h5>{venue.node.title}</h5>
                      <p>
                        <FaMapMarkerAlt /> &nbsp;&nbsp;
                        {venue.node.acf_venuefactsheet.location}
                      </p>

                      <div className="review-box">
                        <ul className="star">
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStarHalfAlt />
                          </li>
                        </ul>
                        <Link
                          to="/area"
                          className="booknow"
                          state={{data: venue.node}}
                        >
                          Book now
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <a href="#" className="load-more btn-orange">
                load more destinations
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <Golfwithsliderhotel data={data.wpcontent.venues.edges} />

      <section className="any-question text-white">
        <Container>
          <Row>
            <Col md={4}>
              <h2 className="quest">Any questions?</h2>
            </Col>

            <Col md={6}>
              <p>
                Visit our FAQ's and clarify all your doubts. If your question is
                not answered, please feel free to send us a message.
              </p>
            </Col>

            <Col md={2}>
              <a
                href="#"
                className="btn btn-orange full-width-btn mt-0 text-white"
              >
                FAQ
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonial commanPaddding">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="site-title text-uppercase ">
                <strong> testimonials </strong>
              </h2>
            </Col>

            <Col md={12}>
              <Testimonialslider />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
