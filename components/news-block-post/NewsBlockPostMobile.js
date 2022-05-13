import React, { useState } from "react";
import Slider from "react-slick";

import Text from "@/components/basic/text/Text";
import Button from "@/components/basic/button/Button";
import BlogPostDate from "@/components/basic/blog-post-date/BlogPostDate";

import { prevButton } from "./NewsBlockPostMobile.module.scss";

const ArrowButton = ({ btnColor }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
      <g id="Group_946" data-name="Group 946" transform="translate(-362 -3514)">
        <path
          id="Path_6566"
          data-name="Path 6566"
          d="M18.5,0A18.5,18.5,0,1,1,0,18.5,18.5,18.5,0,0,1,18.5,0Z"
          transform="translate(362 3514)"
          fill={btnColor}
        />
        <path
          id="Path_6543"
          data-name="Path 6543"
          d="M296.4,3541.569l8.321-9.283,8.321,9.283"
          transform="translate(3917.428 3227.782) rotate(90)"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

const NewsBlockPostMobile = ({ newsItems, readMoreBtnLabel }) => {
  const [slider, setSlider] = useState(null);
  const [index, setIndex] = useState(0);
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (next) => setIndex(next),
  };
  return (
    <div className="w-screen">
      <Slider ref={(e) => setSlider(e)} {...settings}>
        {newsItems.map((item, index) => {
          return (
            <div key={index}>
              <div className="px-28px">
                <Text
                  typography="font-titillium font-bold text-23px leading-35px"
                  text={item.title}
                  className="mt-26px mb-8px"
                />
                <BlogPostDate className="mb-23px mt-9px" date={item.date} />
                <Text typography="body" text={item.content} />
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="grid grid-flow-col justify-between mt-32px px-28px">
        <Button link={newsItems[index].link} variants="blue" btnClasses="w-182px">
          {readMoreBtnLabel}
        </Button>
        <div className="grid grid-cols-2 self-center gap-5px">
          <button className={prevButton} onClick={() => slider.slickPrev()}>
            <ArrowButton btnColor={index === 0 ? "#92bee6" : "#1c5783"} />
          </button>
          <button onClick={() => slider.slickNext()}>
            <ArrowButton btnColor={newsItems.length - 1 === index ? "#92bee6" : "#1c5783"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsBlockPostMobile;
