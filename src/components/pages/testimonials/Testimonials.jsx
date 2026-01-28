import { Data } from "./Dats";
import './Testimonials.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testimonial section">
        <div className="testimonial-headings">
      <h2 className="section-title">My clients say</h2>
      <p className="section-subtitle">Testimonial</p>
      </div>
          <Swiper
              className="testimonial__container"
            //   slidesPerView={1}
              spaceBetween={54}
              grabCursor={true}
              loop={true}
              pagination={{ clickable: true }}
              breakpoints={{
                  576: {
                      slidesPerView: 2
                  },
                  768: {
                      slidesPerView: 2,
                      spaceBetween: 58,
                  }
              }}
              modules={[Pagination]}
          >
              {Data.map(({ id, image, title, description }) => (
                  <SwiperSlide key={id}>
                      <div className="testimonial__card">
                          <img src={image} alt="" className="testimonial__img" />
                          <h3 className="testimonial__name">{title}</h3>
                          <p className="testimonial__description">{description}</p>
                      </div>
                  </SwiperSlide>
              ))}
          </Swiper>

      {/* <Swiper className="testimonial__container">
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img
                src={image}
                alt=""
                className="testimonial__img"
              />

              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">
                {description}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </section>
  );
};

export default Testimonials;
