import React from "react";
import PropTypes from "prop-types";

import Button from "@/components/basic/button/Button";
import Text from "@/components/basic/text/Text";
import BlogPostDate from "@/components/basic/blog-post-date/BlogPostDate";

const NewsBlockPost = ({ content, title, date, link, readMoreBtnLabel }) => {
  return (
    <div className="mt-26px xl:mt-45px w-full">
      <Text typography="font-titillium font-bold text-30px leading-46px" text={title} />
      <BlogPostDate className="mb-19px mt-2px" date={date} />
      <Text typography="body" text={content} />
      <Button variants="border_blue" link={link} className="mt-29px" px="px-37px" py="py-6px">
        {readMoreBtnLabel}
      </Button>
    </div>
  );
};

NewsBlockPost.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
};

NewsBlockPost.defaultProps = {
  content: "some content",
  title: "some title",
  date: "2021-11-01T10:27:39.656Z",
};

export default NewsBlockPost;
