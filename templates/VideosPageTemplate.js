import React from "react";
import classNames from "classnames";

import PageLayout from "@/layouts/PageLayout";

import ContentSection from "@/components/content-section/ContentSection";
import Markdown from "@/components/basic/markdown/Markdown";
import EmbedYouTubeVideo from "@/components/embed-youtube-video/EmbedYouTubeVideo";

const VideosPageTemplate = ({ hero, text, videos }) => {
  return (
    <PageLayout hero={hero}>
      <ContentSection.Container className="mb-29px md:mb-74px">
        <Markdown markdown={text} />
        <div className="grid md:gap-x-40px grid-cols-1 md:grid-cols-2 mt-15px md:mt-45px">
          {videos.map((video, index) => {
            return (
              <React.Fragment key={index}>
                {index !== 0 ? (
                  <hr className={classNames("hr-line-color h-1px mt-30px md:mt-68px mb-30px md:mb-54px opacity-24", {
                    "md:hidden": index % 2 === 1,
                    "md:col-span-2": index % 2 === 0
                  })} />
                ) : null}
                {  video.hospital_name || video.country ?
                    (<EmbedYouTubeVideo
                      media={video.link}
                      title={video.title}
                      subtitle={[video.hospital_name, video.country].join(", ")}
                    />):
                    (<EmbedYouTubeVideo
                      media={video.link}
                      title={video.title}
                    />)
                }
              </React.Fragment>
            );
          })}
        </div>
      </ContentSection.Container>
    </PageLayout>
  );
};

export default VideosPageTemplate;
