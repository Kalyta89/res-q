import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Image from "next/image";

import Text from "@/components/basic/text/Text";
import Link from "@/components/basic/link/Link";
import Markdown from "@/components/basic/markdown/Markdown";

import IconFacebook from "@/components/icons/IconFacebook";
import IconTwitter from "@/components/icons/IconTwitter";
import IconMail from "@/components/icons/IconMail";

import DefaultImage from "@/assets/default-image.png";

import {
  footerImageArea,
  footerGrid,
  footerLinksBlockArea,
  footerAddressBlockArea,
  footerCopyrightBlockArea,
  footerBorderArea,
  footerSocialBlockArea,
} from "./Footer.module.scss";

const Footer = ({
  image,
  links,
  facebookLink,
  email,
  emailLink,
  mailLink,
  twitterLink,
  copyright,
  address,
  addressTitle,
  className,
}) => {
  return (
    <div className={classNames("bg-theme-blue w-full", className)}>
      <div className="container w-full max-w-1450px">
        <div className={classNames("pt-41px md:pt-0px pb-31px md:pb-0px w-full", footerGrid)}>
          <Link link="/" className={classNames(footerImageArea, "md:mt-4px")}>
            <div className="mb-27px md:hidden">
              <Image src={image} alt="logo" width={182} height={55} quality={100} />
            </div>
            <div className="mb-15px hidden md:block">
              <Image src={image} alt="logo" width={288} height={86} quality={100} />
            </div>
          </Link>
          <div className={classNames("flex items-start mt-27px md:mt-33px mb-23px md:mb-0px", footerSocialBlockArea)}>
            <Link link={mailLink} className="-ml-5px mr-7px pt-3px px-5px">
              <IconMail />
            </Link>
            <Link link={facebookLink} className="mr-7px pt-3px px-5px">
              <IconFacebook />
            </Link>
            <Link link={twitterLink} className="pt-3px px-5px">
              <IconTwitter />
            </Link>
          </div>
          <div className={classNames("justify-self-start md:justify-self-end mb-16px md:mb-0px", footerLinksBlockArea)}>
            {links.map((link, i) => (
              <Link link={link.link} key={i}>
                <Text
                  typography="footer"
                  tag="span"
                  className="block text-left md:text-right text-white hover:text-footer-hover"
                  text={link.label}
                />
              </Link>
            ))}
          </div>
          <div className={classNames("w-288px md:mt-6px", footerAddressBlockArea)}>
            <Text className="mb-3px" typography="footer-bold" color="text-white" text={addressTitle} />
            <Text typography="footer" color="text-white">
              <Markdown markdown={address} ignoreDefaultComponents={true} />
            </Text>
            <div className="flex mt-25px md:mt-20px">
              <Text typography="footer" color="text-white" text={email} className="mr-5px" />
              <a href={`mailto:${emailLink}`}>
                <Text typography="footer" color="text-white" className="underline" text={emailLink} />
              </a>
            </div>
          </div>
          <div className={classNames("px-36px md:px-0px md:w-full border border-white", footerBorderArea)}></div>
          <div className={classNames("items-end md:px-0px", footerCopyrightBlockArea)}>
            <Text typography="footer-legal" color="text-white" className="mt-14px md:mt-20px md:mb-45px">
              <Markdown markdown={copyright} ignoreDefaultComponents={true} />
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  image: PropTypes.object,
  links: PropTypes.array,
  copyright: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  emailLink: PropTypes.string,
  className: PropTypes.string,
  facebookLink: PropTypes.string,
  instagramLink: PropTypes.string,
  linkedInLink: PropTypes.string,
};

Footer.defaultProps = {
  image: DefaultImage,
  links: [],
  copyright: "some copyright",
  address: "",
  email: "some email",
  emailLink: "some emailLink",
  className: "",
  facebookLink: "/",
  instagramLink: "/",
  linkedInLink: "/",
};

export default Footer;
