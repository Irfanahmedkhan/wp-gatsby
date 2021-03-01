import React, { useRef } from 'react';
import Slider from "react-slick";

import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import {  FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import {FaStar} from "@react-icons/all-files/fa/FaStar";
import herobg from '../../images/slider-1.png';

export default function Featuredslider(props) {
        

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
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]

        };
        return (
            <div>
                <div className="slider-area ">
                    <Slider ref={(c) => (slider.current = c)} {...settings}>
                        <div >
                            <img src={herobg} className="img-fluid" />

                        </div>

                        <div >
                            <img src={herobg} className="img-fluid" />

                        </div>
                    </Slider>
                    <ul className="slidebtn2">
                        <li><button className="home-prev" onClick={previous} ><FaChevronLeft /></button></li>
                        <li><button className="home-next" onClick={next}><FaChevronRight /></button></li>
                    </ul>

                </div>
            </div>
        )
    }

