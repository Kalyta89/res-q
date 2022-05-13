import Head from "next/head";
import ErrorPage from "next/error";
import { DefaultSeo } from "next-seo";

// import { getSourceUrl } from "@/utils/url"

import "slick-carousel/slick/slick.css";
import "@/styles/index.scss";

const MyApp = ({ Component, pageProps }) => {
  if (pageProps && pageProps.show404) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {/* Favicon */}
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {/* Global site metadata */}
      <DefaultSeo
        titleTemplate="%s | RES-Q"
        title="Page"
        description="Page description"
        // openGraph={{
        //   images: Object.values(metadata.shareImage.formats).map((image) => {
        //     return {
        //       url: getStrapiMedia(image.url),
        //       width: image.width,
        //       height: image.height,
        //     };
        //   }),
        // }}
      />

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
