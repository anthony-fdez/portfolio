import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Zoom from "react-medium-image-zoom";
import { Navigation } from "swiper";
import styles from "./imagesCarousel.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  images: string[];
  altText: string;
  orientation?: "portrait" | "landscape";
}

const ImagesCarousel = ({
  images,
  altText,
  orientation = "landscape",
}: Props): JSX.Element => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Swiper
        // modules={[Navigation, Pagination, Scrollbar, A11y]}
        modules={[Navigation]}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView="auto"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide
              key={`${altText}-${index}`}
              className={
                orientation === "portrait"
                  ? styles.slide_portrait
                  : styles.slide_landscape
              }
            >
              <Zoom>
                <LazyLoadImage
                  effect="blur"
                  className={
                    orientation === "portrait"
                      ? styles.image_portrait
                      : styles.image_landscape
                  }
                  alt={altText}
                  src={image}
                />
              </Zoom>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <p></p>
    </div>
  );
};

export default ImagesCarousel;
