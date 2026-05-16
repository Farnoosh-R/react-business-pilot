import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

export default function SwiperCustomersSlider({ items }) {
  return (
    <div className="max-w-[800px] mr-auto min-w-0 mr-auto">
      <Swiper
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        className="relative pb-10"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-auto">
              <div className="flex flex-col gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-fit object-cove"
                />

                <p className="mt-4 leading-9 text-justify">
                  {item.description}
                </p>
                <h6>{item.title}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
