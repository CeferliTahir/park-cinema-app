import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Link } from "react-router-dom";
import { BANNERS } from "../../helpers/constants";

import nav_bg from "../../assets/icons/nav-bg.svg";
import overlay from "../../assets/images/banners/overlay.webp";

const Carousel = () => {
  return (
    <div className="relative [&_.swiper-button-next]:!z-30 [&_.swiper-button-prev]:!z-30">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper relative h-[100vh] max-md:h-full max-md:max-w-[97%] max-md:mt-20 max-md:rounded-[18px]"
      >
        <img
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
          src={overlay}
          alt="overlay"
        />
        <img
          src={nav_bg}
          alt="nav_bg"
          className="h-full w-28 absolute -right-8 top-1/2 transform -translate-y-1/2 opacity-70 max-sm:w-25 z-20"
        />
        {BANNERS.map((banner, index) => (
          <SwiperSlide key={index}>
            <Link to="/">
              <img
                className="w-full h-full object-cover"
                src={banner.src}
                alt={banner.alt}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
