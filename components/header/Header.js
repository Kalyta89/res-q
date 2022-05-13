import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import classNames from "classnames";

import Button from "@/components/basic/button/Button";
import Link from "@/components/basic/link/Link";
import Text from "@/components/basic/text/Text";
import IconHeader from "@/components/icons/IconHeader";
import IconGraph from "@/components/icons/IconGraph";
import IconMenu from "@/components/icons/IconMenu";

import { useOnClickOutside } from "@/utils/hooks";

import DefaultImage from "@/assets/default-image.png";

import {
  headerGrid,
  headerModal,
  headerLogoArea,
  headerBurgerArea,
  headerLinksWrapper,
  headerLinksArea,
  headerLinksWrapperMobile,
  headerButtonsArea,
  headerButtonsAreaMobile,
  headerSlideDown,
  headerSlideUp,
  headerDropdownMenu,
  headerMegaMenu,
  megaMenuDropdown,
  headerDropdown,
  headerDropdownText,
  partnersGrid,
} from "./Header.module.scss";

const LinkItem = ({ linkLabel, onClick }) => {
  return (
    <button className="flex items-center w-full h-31px" onClick={onClick}>
      <Text typography="navigation" text={linkLabel} className="whitespace-nowrap" tag="span" />
      <IconHeader />
    </button>
  );
};

const DropDownItem = ({ linkLabel, relatedLinks }) => {
  return (
    <div className={classNames(headerDropdown, "group")}>
      <LinkItem linkLabel={linkLabel} />
      <div
        className={classNames(
          headerDropdownMenu,
          "pt-25px pb-31px invisible opacity-0 group-hover:visible group-hover:opacity-100"
        )}
      >
        {relatedLinks.map((item, index) => (
          <Link link={item.link} key={index}>
            <Text typography={headerDropdownText} text={item.label} />
          </Link>
        ))}
      </div>
    </div>
  );
};

const MegaMenu = ({ aboutLabel, aboutLink, aboutRelatedLinks, partnersLabel, partnersLink, partnersRelatedLinks }) => {
  return (
    <div className={classNames(megaMenuDropdown, "group")}>
      <LinkItem linkLabel={aboutLabel} />
      <div
        className={classNames(
          headerMegaMenu,
          "pt-19px pb-31px invisible opacity-0 group-hover:visible group-hover:opacity-100"
        )}
      >
        <div>
          {/* <Link link={aboutLink}> */}
          <Text typography="navigation" text={aboutLabel} className="whitespace-nowrap" tag="span" />
          {/* </Link> */}
          <hr className="w-full h-1px mt-11px mb-17px border-none bg-theme-blue" />
          <div className="grid grid-cols-2 gap-y-12px gap-x-7px">
            {aboutRelatedLinks.map((item, index) => (
              <Link link={item.link} key={index}>
                <Text typography={headerDropdownText} text={item.label} />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Link link={partnersLink}>
            <Text typography="navigation" text={partnersLabel} className="whitespace-nowrap" tag="span" />
          </Link>
          <hr className="w-full h-1px mt-11px mb-17px border-none bg-theme-blue" />
          <div className={partnersGrid}>
            {partnersRelatedLinks.map((item, index) => (
              <Link link={item.link} key={index}>
                <Text typography={headerDropdownText} text={item.label} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = ({
  className,
  image,
  headerLinksMobile,
  headerLinksDesktop,
  metricsLabel,
  metricsLink,
  logoLink,
  signInButtonLabel,
  signInButtonLink,
  registerButtonLabel,
  registerButtonLink,
}) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState();
  const [showRelatedLinks, setShowRelatedLinks] = useState();
  const headerRef = useRef();
  useOnClickOutside(headerRef, () => {
    setShowBurgerMenu(false);
    setShowRelatedLinks(false);
  });

  const triggerShowBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
    if (!showBurgerMenu) {
      setShowRelatedLinks(false);
    }
  };

  const renderedMenu = headerLinksDesktop.map((item, index) => {
    if (item.relatedLinks) {
      return (
        <React.Fragment key={index}>
          <DropDownItem linkLabel={item.label} relatedLinks={headerLinksDesktop[index].relatedLinks} />
        </React.Fragment>
      );
    } else if (item.type === "mega") {
      return (
        <React.Fragment key={index}>
          <MegaMenu
            aboutLabel={item.aboutLabel}
            aboutLink={item.aboutLink}
            aboutRelatedLinks={item.aboutRelatedLinks}
            partnersLabel={item.partnersLabel}
            partnersLink={item.partnersLink}
            partnersRelatedLinks={item.partnersRelatedLinks}
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment key={index}>
          <Link link={item.link}>
            <Text typography="navigation" text={item.label} />
          </Link>
        </React.Fragment>
      );
    }
  });

  return (
    <div ref={headerRef} className={classNames(className, "grid xl:justify-center bg-white")}>
      <div className={headerGrid}>
        <div className={headerLogoArea}>
          <Link link={logoLink}>
            <Image src={image} placeholder="blur" className="w-full" />
          </Link>
        </div>

        <button onClick={triggerShowBurgerMenu} className={classNames(headerBurgerArea, "mr-27px")}>
          <IconMenu />
        </button>
        <div className={headerLinksWrapper}>
          <div className={headerLinksArea}>
            {renderedMenu}
            <Link link={metricsLink} newTab className="flex items-center h-31px">
              <IconGraph />
              <Text typography="navigation" tag="span" text={metricsLabel} className="whitespace-nowrap ml-5px" />
            </Link>
          </div>
        </div>
        <div className={classNames(headerButtonsArea, "mb-2px")}>
          <Button link={registerButtonLink} variants="blue" py="py-9px" px="px-30px">
            {registerButtonLabel}
          </Button>
          <Button link={signInButtonLink} variants="border_blue" py="py-6px" px="px-37px" className="ml-20px">
            {signInButtonLabel}
          </Button>
        </div>
        <div className={headerButtonsAreaMobile}>
          <Button
            link={registerButtonLink}
            variants="join_button"
            px="px-15px"
            className="w-full focus:outline-none"
            tabSelectClass="p-0px m-0px"
          >
            {registerButtonLabel}
          </Button>
          <Button
            link={signInButtonLink}
            variants="sign_in_button"
            px="px-15px"
            className="w-full focus:outline-none"
            tabSelectClass="p-0px m-0px"
          >
            {signInButtonLabel}
          </Button>
        </div>
      </div>

      {/* Mobile: Burger menu */}
      <div
        className={classNames(headerModal, { [headerSlideDown]: showBurgerMenu }, { [headerSlideUp]: !showBurgerMenu })}
      >
        <div className={classNames(headerLinksWrapperMobile, "pt-22px pb-33px px-33px")}>
          {showRelatedLinks ? (
            showRelatedLinks.map((link, linkIndex) => (
              <React.Fragment key={linkIndex}>
                {linkIndex > 0 ? <div className="w-full h-1px my-14px bg-theme-blue opacity-10" /> : null}
                <Link link={link.link}>
                  <Text typography="navigation" text={link.label} />
                </Link>
              </React.Fragment>
            ))
          ) : (
            <>
              {headerLinksMobile.map((item, index) => (
                <React.Fragment key={index}>
                  {item.relatedLinks ? (
                    <LinkItem linkLabel={item.label} onClick={() => setShowRelatedLinks(item.relatedLinks)} />
                  ) : (
                    <Link link={item.link}>
                      <Text typography="navigation" text={item.label} />
                    </Link>
                  )}
                  <div className="w-full h-1px mt-13px mb-14px bg-theme-blue opacity-10" />
                </React.Fragment>
              ))}
              <Link link={metricsLink} newTab className="flex items-center">
                <IconGraph />
                <Text typography="navigation" tag="span" text={metricsLabel} className="ml-9px" />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  image: PropTypes.object,
  headerLinks: PropTypes.array,
  logoLink: PropTypes.string,
  signInButtonLabel: PropTypes.string,
  signInButtonLink: PropTypes.string,
  registerButtonLabel: PropTypes.string,
  registerButtonLink: PropTypes.string,
  className: PropTypes.string,
};

Header.defaultProps = {
  image: DefaultImage,
  headerLinks: [
    {
      label: "Link 1",
      relatedLinks: [
        { label: "Related link 1", link: "/demo-page" },
        { label: "Related link 2", link: "/demo-page" },
        { label: "Related link 3", link: "/demo-page" },
      ],
    },
    {
      label: "Link 2",
      relatedLinks: [
        { label: "Related link 1", link: "/demo-page" },
        { label: "Related link 2", link: "/demo-page" },
      ],
    },
    {
      label: "Link 3",
      link: "/demo-page",
    },
  ],
  logoLink: "/demo-page",
  signInButtonLabel: "Button1",
  signInButtonLink: "/",
  registerButtonLabel: "Button2",
  registerButtonLink: "/",
  className: "",
};

export default Header;
