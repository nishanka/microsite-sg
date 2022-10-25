import React from "react";
import "../styles/video-slide.css";

const VideoSlide = ({ title, details, videoUrl }) => {

    return (
        <div className={"hero__slide video-slide"}>
            {videoUrl &&
                <video className={"video-slide__video"} src={videoUrl} autoPlay loop muted playsInline />
            }
            <div className={"container"}>
                <div className={"video-slide__content"}>
                    {!!title && <h2 className={"video-slide__title"}>{title}</h2>}
                    {!!details && 
                        <div className={"video-slide__details"}>
                            <p>{details}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );

}

export default VideoSlide;