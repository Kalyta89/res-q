import PropTypes from "prop-types";

import Text from "@/components/basic/text/Text";

import { videoContainer, iframe } from "./EmbedYouTubeVideo.module.scss";

const EmbedYouTubeVideo = ({ media, title, subtitle, className }) => {
  return (
    <div className={className}>
      <div className="grid justify-items-stretch w-full h-full">
        <Text
          typography="font-titillium font-bold text-20px lg:text-40px leading-31px lg:leading-46px"
          text={title}
          className="mb-5px md:mb-3px"
        />
        {subtitle ?
            (<Text
              typography="font-titillium font-semibold not-italic text-16px lg:text-30px leading-24px lg:leading-46px"
              color="text-theme-light-blue"
              className="mb-30px md:mb-41px ml-1px md:ml-0px"
              text={subtitle}
            />):null}

        <div className={videoContainer}>
          <iframe
            src={media}
            className={iframe}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div>
      </div>
    </div>
  );
};

EmbedYouTubeVideo.propTypes = {
  media: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};
EmbedYouTubeVideo.defaultProps = {
  media: "https://www.youtube.com/embed/8W98yOUDofw",
  title: "title",
  className: "",
};
export default EmbedYouTubeVideo;
