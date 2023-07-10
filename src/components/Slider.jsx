import "../styles/style.scss";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        EffectCoverflow,
        Autoplay,
      ]}
      // effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      // coverflowEffect={{
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows: true,
      // }}
      navigation={true}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://picsum.photos/id/216/1000/1000" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/342/1000/1000" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/264/1000/1000" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/364/1000/1000" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/854/1000/1000" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/228/1000/1000" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/908/1000/1000" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/396/1000/1000" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
