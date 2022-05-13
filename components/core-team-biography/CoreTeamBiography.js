import { useEffect, useState } from "react";
import classNames from "classnames";
import Modal from "react-modal";

import Image from "@/components/basic/image/Image";
import Text from "@/components/basic/text/Text";
import Markdown from "@/components/basic/markdown/Markdown";

import { getSourceUrl } from "@/utils/url";

import {
  biographyImageFilter,
  biographyImageFilterTwo,
  modalOverlay,
  modal,
  closeCrossContainer,
  closeCross,
  modalImage,
  modalBackground,
  modalTextWrapper,
} from "./CoreTeamBiography.module.scss";

const CoreTeamBiography = ({ image, title, subtitle, text }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const imageUrl = getSourceUrl(image.url);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [modalIsOpen]);

  return (
    <div className="flex items-center my-30px">
      <div onClick={() => setModalIsOpen(!modalIsOpen)} className="relative mr-20px cursor-pointer">
        <Image media={image} className="rounded-full" width={300} height={300} />
        <div className={classNames("absolute w-full h-full left-0px top-0px rounded-full", biographyImageFilter)} />
        <div className={classNames("absolute w-full left-0px top-0px rounded-full", biographyImageFilterTwo)} />
      </div>
      <div className="md:m-20px w-full">
        <Text
          typography="font-titillium font-semibold not-italic text-25px md:text-30px leading-38px md:leading-46px"
          text={title}
          onClick={() => setModalIsOpen(!modalIsOpen)}
          className="underline"
        />
        {subtitle && (
          <Text
            typography="font-titillium font-semibold text-18px md:text-14px"
            text={subtitle}
            color="text-theme-light-blue"
          />
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(!modalIsOpen)}
        ariaHideApp={false}
        className={modal}
        overlayClassName={modalOverlay}
      >
        <div
          className={classNames("relative h-full", modalImage, modalBackground)}
          style={{
            "--modal-image": `url("${imageUrl}")`,
          }}
        >
          <div className={classNames("absolute w-full h-full left-0px top-0px", biographyImageFilter)} />
        </div>
        <div className={classNames("overflow-y-auto pr-8px", modalTextWrapper)}>
          <Text
            typography="font-titillium font-bold not-italic text-25px md:text-50px leading-32px md:leading-76px"
            text={title}
          />
          {subtitle && (
            <Text
              typography="font-titillium font-semibold text-18px md:text-30px"
              text={subtitle}
              color="text-theme-light-blue"
            />
          )}
          <div className={"h-2px w-full mt-14px md:mt-23px mb-14px md:mb-15px bg-theme-blue"} />
          <Markdown markdown={text} />
        </div>
        <div onClick={() => setModalIsOpen(!modalIsOpen)} className={closeCrossContainer}>
          <div className={closeCross}></div>
        </div>
      </Modal>
    </div>
  );
};

export default CoreTeamBiography;
