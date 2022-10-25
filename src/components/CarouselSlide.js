import React, {useEffect} from "react";
import "../styles/carousel-slide.css";
import CarouselCard from "./CarouselCard";
import backgroundMobile from "../assets/img-800x368.jpg";
import backgroundTablet from "../assets/img-1280x800.jpg";
import backgroundDesktop from "../assets/img-1920x1200.jpg";
import { CAROUSEL_CARDS } from "../utils/Contants";
import Slider from "react-slick";

const CarouselSlide = ({ title, topLinkUrl, topLinkText }) => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const isMobile = (width < 480);
    const isTablet = ((width < 1024 ) && (width > 480));
    const isDesktop = (width > 1024);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        vertical: false,
        variableWidth: false,
        centerMode: false,
        arrows: true,
        autoPlay: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    variableWidth: false,
                },
            }
        ],
    };

    return (
        <div className={"hero__slide carousel-slide"}>
            {!!topLinkUrl && 
                <div className={"carousel-slide__link"}>
                    <a href={topLinkUrl}>{topLinkText}</a>
                </div>
            }
            {isMobile &&
                <div className={"carousel-slide__image"} style={{ backgroundImage: `url(${backgroundMobile})`}} />
            }
            {isTablet &&
                <div className={"carousel-slide__image"} style={{ backgroundImage: `url(${backgroundTablet})`}} />
            }
            {isDesktop &&
                <div className={"carousel-slide__image"} style={{ backgroundImage: `url(${backgroundDesktop})`}} />
            }
            <div className={"container carousel-slide__container"}>
                <div className={"carousel-slide__content"}>
                    {!!title && <h2 className={"carousel-slide__title"}>{title}</h2>}
                    <div className={"carousel-slide__carousel"}>
                        <Slider {...settings}>
                            {
                                CAROUSEL_CARDS.map((item, index) => {
                                    return <CarouselCard {...item} key={item.id} />
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CarouselSlide;