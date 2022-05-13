import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Slider from "react-slick";

import Image from "@/components/basic/image/Image";
import Text from "@/components/basic/text/Text";
import { useIsDesktop } from "@/utils/hooks";

import {
  hero_image,
  dots_list,
  itemsHeroContainer,
  itemsGrid,
  titleArea,
  subtitleArea,
  dot_item,
} from "./HeroHome.module.scss";

const HeroHome = ({ heroItems, className }) => {
  const isDesktop = useIsDesktop();
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplaySpeed: 10000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "ease-out",
    dotsClass: "absolute w-full bottom-25px md:bottom-25px",
    appendDots: (dots) => (
      <div>
        <ul className={dots_list}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => <div className={dot_item}>{i + 1}</div>,
  };
  return (
    <div className={className}>
      <Slider {...settings}>
        {heroItems.map((item, index) => (
          <div key={index} className="relative w-full h-373px md:h-304px bg-white">
            {isDesktop ? (
              <Image
                media={item.image}
                layout="fill"
                placeholder="blur"
                objectFit="cover"
                objectPosition="center"
                alt="background"
                quality={100}
                className={hero_image}
              />
            ) : (
              <Image
                media={item.imageMobile}
                layout="fill"
                placeholder="blur"
                objectFit="cover"
                objectPosition="center"
                alt="background"
                quality={100}
                className={hero_image}
              />
            )}
            <div className={itemsHeroContainer}>
              {item.subtitle ? (
                <div className={classNames(itemsGrid, "relative pt-52px xl:pt-30px mx-auto")}>
                  <Text
                    className={classNames(
                      titleArea,
                      "text-20px xl:text-35px leading-29px xl:leading-37px font-titillium font-bold text-white mb-8px md-mb-0px"
                    )}
                    text={item.title}
                  />
                  <div className={subtitleArea}>
                    <Text
                      className={classNames(
                        "text-24px xl:text-35px leading-25px xl:leading-37px font-titillium font-bold text-white"
                      )}
                      text={item.subtitle}
                    />
                    <Text
                      className="text-20px xl:text-25px leading-25px xl:leading-29px font-titillium text-white mt-13px md:mt-9px"
                      text={item.quote}
                    />
                  </div>
                </div>
              ) : (
                <div className="relative text-center mx-auto mt-120px md:mt-75px">
                  <Text typography="h1-home-hero" className="text-20px text-white" text={item.title} />
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

HeroHome.propTypes = {
  heroItems: PropTypes.array,
  className: PropTypes.string,
};

HeroHome.defaultProps = {
  heroItems: [],
  className: "",
};
export default HeroHome;
