import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {BsPlus} from "@react-icons/all-files/bs/BsPlus";
import hotelimg from "../../images/hotel.png";
import golfimg from "../../images/sgolf.png";

export default function Golfwithhotelblock( props ) {
  // console.log(props)
  return (
    <div>
      <div className="golf-info no-padding golf-plus-hotel">
        <div className="golf-img">
          <Row className="box-ed-2">
            <Col>
              <img src={hotelimg} className="img-fluid" />
            </Col>
            <Col>
              <img src={golfimg} className="img-fluid" />
            </Col>
          </Row>

          <span className="plus-chart">
            <BsPlus />
          </span>
        </div>

        <div className="golf-bio">
          <Row>
            <Col lg={9} md={12} xs={12}>
              <div className="golf-houe">
                <h4>{props.title}</h4>
                <p>
                  {props.detail}
                </p>
              </div>
            </Col>

            <Col lg={3} md={12} xs={12}>
              <div className="price new-price-filter">
                <div>
                  <p>The price starts from</p>
                  <h3 className="green-color">{props.price}</h3>
                </div>

                <a href="#" className="book-btn">
                  Book now
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
