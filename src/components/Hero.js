import React , {useEffect, useRef} from "react";
import "../styles/hero.css";
import "../styles/slick.css";
import VideoSlide from "./VideoSlide";
import CarouselSlide from "./CarouselSlide";
import { CAROUSEL_SLIDE, VIDEO_SLIDE } from "../utils/Contants";
import Slider from "react-slick";

const Hero = () => {

    const sliderRef = useRef();

    useEffect(() => {
        let slickList = document.getElementsByClassName('slick-list')[0];
        slickList.addEventListener('wheel', event => {
            event.preventDefault();
            event.deltaY > 0 ? sliderRef.current.slickNext() : sliderRef.current.slickPrev();
        })
    });

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        vertical: true,
        slidesToScroll: 1,
        variableWidth: false,
        centerMode: false,
        arrows: true,
        fade: true,
        autoPlay: false,
    };

    return (
        <div className={"hero"}>
            <Slider {...settings} ref={sliderRef}>
                <VideoSlide {...VIDEO_SLIDE} />   
                <CarouselSlide {...CAROUSEL_SLIDE} />
            </Slider>
        </div>
    );

}

export default Hero;