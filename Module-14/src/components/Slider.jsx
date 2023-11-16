import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Slider = (props) => {
  // console.log(props);
  return (
    <>
      <div className="bg-white py-6">
        <div className="container mx-auto">
          <Swiper
            spaceBetween={24}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <div className="flex justify-between items-center">
              {props.slider.images.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="">
                    <img src={item} className="rounded-lg" alt="" />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Slider;
