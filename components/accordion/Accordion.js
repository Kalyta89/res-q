import React from "react";
import PropTypes from "prop-types";
import NextImage from "next/image";
import Image from "@/components/basic/image/Image";
import Collapsible from "react-collapsible";
import classNames from "classnames";

import Text from "@/components/basic/text/Text";

import AddImage from "@/assets/components/accordion/add.svg";
import MinusImage from "@/assets/components/accordion/minus.svg";

import { triger_shadow } from "./Accordion.module.scss";

const Trigger = ({ isOpen, image, titlePx, isLargeTiles, title }) => {
  return (
    <div
      className={classNames(
        "grid grid-flow-col grid-col-2 gap-15px justify-between items-center cursor-pointer md:py-13px bg-theme-blue rounded-16px",
        !isLargeTiles ? { [triger_shadow]: isOpen } : null,
        titlePx
      )}
    >
      <div
        className={classNames("grid items-center gap-13px", {
          "grid-flow-col grid-col-2": image,
        })}
      >
        {image ? (
          <>
            <div className="md:hidden h-34px w-34px rounded-full overflow-hidden">
              <Image media={image} width={34} height={34} />
            </div>
            <div className="hidden md:block h-46px w-46px rounded-full overflow-hidden">
              <Image media={image} width={46} height={46} />
            </div>
            <Text typography="h3" text={title} color="text-white" />
          </>
        ) : (
          <>
            <Text
              typography={
                isLargeTiles
                  ? "font-titillium font-bold text-25px"
                  : "font-titillium font-semibold text-20px md:text-40px leading-23px md:leading-70px"
              }
              text={title}
              color="text-white"
            />
          </>
        )}
      </div>
      <div
        className={classNames("grid md:hidden", {
          "w-25px h-25px": isLargeTiles,
          "w-34px h-34px": !isLargeTiles,
        })}
      >
        <NextImage src={isOpen ? MinusImage : AddImage} width={34} height={34} />
      </div>
      <div className="hidden md:grid w-46px h-46px">
        <NextImage src={isOpen ? MinusImage : AddImage} width={46} height={46} />
      </div>
    </div>
  );
};

const AccordionItem = ({ title, content, image, titlePx, contentClass, isLargeTiles }) => {
  return (
    <Collapsible
      className="min-w-full"
      openedClassName="min-w-full"
      trigger={<Trigger isLargeTiles={isLargeTiles} image={image} isOpen={false} title={title} titlePx={titlePx} />}
      triggerWhenOpen={
        <Trigger
          isLargeTiles={isLargeTiles}
          image={image}
          isOpen={true}
          imageButton={MinusImage}
          title={title}
          titlePx={titlePx}
        />
      }
    >
      <div className={contentClass}>{content}</div>
    </Collapsible>
  );
};

const Accordion = ({ accordionItems, className, titlePx, contentClass, isLargeTiles }) => {
  return (
    <div className={classNames(className, `${isLargeTiles ? "grid gap-12px" : "container gap-6px"}`)}>
      {accordionItems.map((item, index) => (
        <AccordionItem
          isLargeTiles={isLargeTiles}
          key={index}
          title={item.title}
          image={item.image}
          titlePx={titlePx}
          content={item.content}
          contentClass={contentClass}
        />
      ))}
    </div>
  );
};

Accordion.propTypes = {
  accordionItems: PropTypes.array,
  contentClass: PropTypes.string,
  className: PropTypes.string,
  titlePx: PropTypes.string,
};

Accordion.defaultProps = {
  className: "",
  contentClass: "bg-accordion-color rounded-16px -mt-16px pt-16px",
  titlePx: "pl-16px md:pl-30px pr-15px md:pr-40px py-7px",
};

export default Accordion;
