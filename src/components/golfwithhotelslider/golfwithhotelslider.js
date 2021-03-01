import React, {useRef} from "react";
import Slider from "react-slick";
import {Container, Row, Col} from "react-bootstrap";
import Golfwithhotelblock from "../golfwithhotelblock/golfwithhotelblock";

import {FaChevronLeft} from "@react-icons/all-files/fa/FaChevronLeft";
import {FaChevronRight} from "@react-icons/all-files/fa/FaChevronRight";

export default function Golfwithhotelslider(props) {
  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplaySpeed: 3000,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  return (
    <div>
      <section className="golf-box commanPaddding bg-light-green">
        <Container>
          <Row>
            <Col md={12}>
              <div className="d-flex justify-content-between">
                <h2 className="site-title text-uppercase ">
                  <strong> Golf </strong> + Hotels
                </h2>

                <ul className="lr-arrow">
                  <li>
                    <button className="home-prev2" onClick={previous}>
                      <FaChevronLeft />
                    </button>
                  </li>
                  <li>
                    <button className="home-next2" onClick={next}>
                      <FaChevronRight />
                    </button>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={12}>
              <div className="golf-plus-box">
                <Slider ref={(c) => (slider.current = c)} {...settings2}>
                  {props.data.map(s=>
                    <Golfwithhotelblock 
                        title={s.node.title} 
                        detail={s.node.acf_venuefactsheet.shortDetails} 
                        price={s.node.acf_venueprice.pricePerPersonWeekday}
                    />
                  )}
                  
{/* 
                  <Golfwithhotelblock />

                  <Golfwithhotelblock /> */}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
