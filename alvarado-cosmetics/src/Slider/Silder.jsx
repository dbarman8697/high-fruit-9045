import React from "react";

import { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

// import Reffer from "./Reffer";

import "../index.css";
import { SlideData } from "./SlideData";


export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = SlideData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
        // console.log("next");
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
        // console.log("prev");
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <>
            <div className="slider">
                <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
                <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
                {SlideData.map((slide, index) => {
                    return (
                        <div
                            className={index === currentSlide ? "slide current" : "slide"}
                            key={index}
                        >
                            {index === currentSlide && (
                                <div>
                                    <img src={slide.image} alt="slide" className="image" />
                                    {/* <div className="content"> */}
                                    {/* <p>{slide.heading}</p>
                    <p>{slide.desc}</p> */}

                                    {/* </div> */}
                                </div>
                            )}
                        </div>
                    );
                })}


            </div>

            {/* <Reffer /> */}
        </>
    );
}
