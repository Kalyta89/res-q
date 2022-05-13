import React, { useState, useMemo } from "react";
import Slider from "react-slick";
import classNames from "classnames";

import Text from "@/components/basic/text/Text";
import Button from "@/components/basic/button/Button";

import {
  containerSuccessSliderSection,
  containerVideoSlider,
  prevButton,
  containerSlideItem,
  videoContainer,
  iframe,
  arrowButton,
  arrowButtonPositionPrev,
  arrowButtonPositionNext,
} from "./SuccessStoriesSlider.module.scss";

const SuccessStoriesSlider = ({ videos, className }) => {
  const [slider, setSlider] = useState(null);
  const [index, setIndex] = useState(0);
  const randomStartingSlide = useMemo(() => Math.floor(Math.random() * videos.length), []);
  const settings = {
    arrows: false,
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: randomStartingSlide,
    afterChange: (next) => setIndex(next),
    responsive: [
      {
        breakpoint: 1538,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          afterChange: (next) => setIndex(next),
        },
      },
    ],
  };
  return (
    <div className={classNames("bg-theme-blue w-full overflow-hidden", className)}>
      <div className={classNames(containerSuccessSliderSection, "container mx-auto")}>
        <Text
          typography="font-titillium font-bold text-28px md:text-50px leading-31px md:leading-46px text-left"
          color="text-white"
          text="Success Stories"
          className="mb-20px md:mb-30px pt-40px md:pt-60px"
        />
        <div className={classNames(containerVideoSlider, "relative")}>
          <Slider ref={(e) => setSlider(e)} {...settings}>
            {videos.map((video, index) => {
              return (
                <div key={index}>
                  <div className={classNames(containerSlideItem, "mx-auto")}>
                    <div className={videoContainer}>
                      <iframe
                        src={video.link}
                        className={iframe}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="video"
                      />
                    </div>
                    <Text
                      typography="font-titillium font-semibold text-22px xl:text-30px leading-31px xl:leading-38px"
                      color="text-white"
                      text={video.title}
                      className="text-left mt-8px md:mt-16px mb-5px md:mb-3px"
                    />
                    <Text
                      typography="font-titillium font-semibold not-italic text-22px xl:text-30px leading-24px xl:leading-31px"
                      color="text-theme-light-blue"
                      className="text-left mb-40px "
                      text={video.hospital_name}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
          <button
            className={classNames(prevButton, arrowButtonPositionPrev, "absolute md:top-1/4 py-8px px-8px")}
            onClick={() => slider.slickPrev()}
          >
            <div className={classNames(arrowButton, "w-37px h-37px")}></div>
          </button>
          <button
            className={classNames(arrowButtonPositionNext, "absolute md:top-1/4 py-8px px-8px")}
            onClick={() => slider.slickNext()}
          >
            <div className={classNames(arrowButton, "w-37px h-37px")}></div>
          </button>
        </div>

        <div className="md:text-center">
          <Button
            link="/useful-information/success-stories"
            variants="light_blue"
            px="px-20px md:px-45px"
            py="py-8px"
            btnClasses="mt-5px md:mt-25px mb-50px md:mb-85px"
          >
            View All Stories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesSlider;
