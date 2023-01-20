import React from 'react';
import "../styles/carousel-card.css"

const CarouselCard = ({ title, content }) => {

    return (
        <>
            {(!!title || !!content) && (
                <div className={"carousel-card"}>
                    <div className={"carousel-card__inner"}>
                        {!!title && <h2 className={"carousel-card__title"}>{title}</h2>}
                        {!!content && 
                            <div className={"carousel-card__content"}>
                                <p>{content}</p>
                            </div>
                        }
                    </div>
                </div>
            )}
        </>
    );

};

export default CarouselCard;