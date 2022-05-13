import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { useIsDesktop } from "@/utils/hooks";

import Button from "@/components/basic/button/Button";
import Text from "@/components/basic/text/Text";
import NewsBlockPost from "@/components/news-block-post/NewsBlockPost";
import NewsBlockPostMobile from "@/components/news-block-post/NewsBlockPostMobile";

const NewsBlock = ({ title, subtitle, viewMoreBtnLabel, readMoreBtnLabel, newsItems, className }) => {
  const [numberOfVisiblePosts, setNumberOfVisiblePosts] = useState(5);
  const isDesktop = useIsDesktop();
  return (
    <div className={classNames("w-full bg-bg-color-news pt-40px xl:pt-86px pb-75px xl:pb-94px", className)}>
      <div className="container">
        <div className="w-full">
          <Text typography="h2" text={title} />
          <Text typography="h4" text={subtitle} className="mt-6px xl:pt-21px pb-18px" />
          <hr className="hr-line" />
        </div>
      </div>
      {isDesktop ? (
        <div className="container">
          {newsItems.slice(0, numberOfVisiblePosts).map((obj, i) => {
            return <NewsBlockPost key={i} readMoreBtnLabel={readMoreBtnLabel} {...obj} />;
          })}
          {numberOfVisiblePosts < newsItems.length ? (
            <Button
              variants="border_blue_big"
              px="px-37px"
              py="py-6px"
              className="mt-20px xl:mt-90px"
              onClick={() => setNumberOfVisiblePosts(numberOfVisiblePosts + 5)}
            >
              {viewMoreBtnLabel}
            </Button>
          ) : null}
        </div>
      ) : (
        <NewsBlockPostMobile newsItems={newsItems} readMoreBtnLabel={readMoreBtnLabel} />
      )}
    </div>
  );
};

NewsBlock.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  newsItems: PropTypes.array,
  className: PropTypes.string,
};

NewsBlock.defaultProps = {
  title: "some title",
  subtitle: "some subtitle",
  newsItems: [],
  className: "",
};
export default NewsBlock;
