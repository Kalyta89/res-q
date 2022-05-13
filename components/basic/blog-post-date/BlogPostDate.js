import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { DateTime } from "luxon";
import classNames from "classnames";

import Text from "@/components/basic/text/Text";

import DateIcon from "@/assets/components/home/icon-calendar.svg";

const BlogPostDate = ({ date, className }) => {
  const dt = DateTime.fromISO(date);
  let blogPostDate = dt.setLocale("us").toFormat("dd LLLL yyyy");
  return (
    <div className={classNames("flex", className)}>
      <Image src={DateIcon} width={20} height={20} />
      <Text
        typography="font-titillium font-normal not-italic text-16px leading-24px md:text-20px md:leading-31px"
        text={blogPostDate}
        className="ml-8px"
      />
    </div>
  );
};

BlogPostDate.propTypes = {
  className: PropTypes.string,
};

BlogPostDate.defaultProps = {
  className: "",
};

export default BlogPostDate;
