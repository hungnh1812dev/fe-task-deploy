"use client";
import { GSlider, type GSliderType } from "@webfac/gslider";
import { Modal } from "@webfac/react-common/Modal";
import { HtmlRender } from "@webfac/react-common/HtmlRender";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface CarouselProps {
  data: {
    title: string;
    description: string;
    image: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [slider, setSlider] = useState<GSliderType | null>(null);
  const [popupState, setPopup] = useState<{
    open: boolean;
    image?: string;
  } | null>(null);

  useEffect(() => {}, [slider]);

  return (
    <>
      <GSlider
        sliderRef={setSlider}
        classes={{ slide: "w-full md:w-1/2 lg:w-1/3 flex" }}
        options={{
          loop: false,
          alwaysFill: true,
          align: "start",
        }}
      >
        {data.map((item, index) => (
          <div key={`item-${index}`} className="flex p-4">
            <div className="flex flex-col items-center bg-gray-600 text-white">
              <div className="relative w-full cursor-pointer overflow-hidden pb-[65.25%]" onClick={() => setPopup({ open: true, image: item.image })}>
                <img className="absolute top-0 left-0 block h-full w-full" src={item.image} alt="product image" />
              </div>
              <div className="p-4">
                <div className="text-title mb-4 text-center font-bold uppercase">{item.title}</div>
                <HtmlRender className="text-description text-center" content={item.description} />
              </div>
            </div>
          </div>
        ))}
      </GSlider>
      <Modal
        isOpen={popupState?.open || false}
        onBackClick={() => setPopup(null)}
        onKeyEcs={() => setPopup(null)}
        classes={{
          content: ``,
        }}
      >
        <div
          id="modal-btn-close"
          className="fixed top-4 right-4 z-10 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-600 text-white uppercase"
          onClick={() => setPopup(null)}
        >
          X
        </div>
        <motion.div
          className="relative h-[90vh] w-[90vw]"
          variants={{
            close: { opacity: 0, scale: 0, transition: { duration: 0.25 } },
            open: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
          }}
          initial="close"
          animate={popupState?.open ? "open" : "close"}
        >
          <img className="h-full w-full object-contain object-center" src={popupState?.image || ""} alt="product image" />
        </motion.div>
      </Modal>
    </>
  );
};

export default Carousel;
