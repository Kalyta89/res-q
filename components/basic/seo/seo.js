import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import { getSourceUrl } from "@/utils/url";
import { mediaPropTypes } from "utils/types";

const Seo = ({ metadata }) => {
  if (!metadata) return null;

  return (
    <NextSeo
      title={metadata.title}
      description="The first global registry focused on improving stroke care."
      openGraph={{
        // Title and description are mandatory
        title: metadata.title,
        type: "website",
        ...(metadata.image && {
          images: [
            {
              url: getSourceUrl(metadata.image.url),
              mime: metadata.image.mime,
            },
          ],
        }),
      }}
    />
  );
};

Seo.propTypes = {
  metadata: PropTypes.shape({
    title: PropTypes.string.isRequired,
    shareImage: mediaPropTypes,
  }),
};

export default Seo;
