import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import slide1 from '../assets/images/01.jpg';
import slide2 from '../assets/images/02.jpg';

const Banner = () => {
  return (
    <section className="banner position-relative">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        effect="fade"
        speed={1000}
        className="swiper-container h-900 h-lg-700 h-md-600 h-sm-500"
      >
        <SwiperSlide>
          <div
            className="swiper-slide align-items-center d-flex bg-overlay-black-50"
            style={{ backgroundImage: `url(${slide1})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}
          >
            <div className="swipeinner container">
              <div className="row justify-content-center text-center">
                <div className="col-xl-10 col-md-12">
                  <div className="slider-1">
                    <div className="animated" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.25s">
                      <h1 className="animated display-3 text-white mb-4" data-swiper-animation="fadeInUp" data-duration="1.5s" data-delay="0.25s">
                        Our Spread in the Verticals
                      </h1>
                      <div className="animated h5 text-white px-lg-5" data-swiper-animation="fadeInUp" data-duration="2.5s" data-delay="0.25s">
                        <span className="d-inline-block"><i className="fas fa-check-square ml-3 mr-2 mb-3"></i>Manufacturing</span>
                        <span className="d-inline-block"><i className="fas fa-check-square ml-3 mr-2 mb-3"></i>Engineering</span>
                        <span className="d-inline-block"><i className="fas fa-check-square ml-3 mr-2 mb-3"></i>Infrastructure</span>
                        <span className="d-inline-block"><i className="fas fa-check-square ml-3 mr-2 mb-3"></i>IT / ITES - BPO</span>
                        <span className="d-inline-block"><i className="fas fa-check-square ml-3 mr-2 mb-3"></i>Telecom / Media</span>
                        <span className="d-inline-block"><i className="fas fa-check-square ml-3 mr-2 mb-3"></i>Banking & Financial Services</span>
                        <span className="d-inline-block"><i className="fas fa-check-square ml-3 mr-2 mb-3"></i>Pharmaceuticals & Chemicals</span>
                        <span className="d-inline-block"><i className="fas fa-check-square ml-3 mr-2 mb-3"></i>Hospitality</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-slide align-items-center d-flex bg-overlay-black-50"
            style={{ backgroundImage: `url(${slide2})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}
          >
            <div className="swipeinner container">
              <div className="row justify-content-start">
                <div className="col-xl-8 col-md-12">
                  <div className="slider-2">
                    <div className="animated" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.25s">
                      <h1 className="animated display-3 text-white mb-4" data-swiper-animation="fadeInUp" data-duration="1s" data-delay="0.25s">
                        The Power of Choice.
                      </h1>
                      <div className="animated h5 text-white" data-swiper-animation="fadeInUp" data-duration="2.5s" data-delay="0.25s">
                        We bring you an awesomeness of design, creative skills, thoughts, and ideas.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-prev" role="button" aria-label="Previous slide"><span></span>Prev</div>
      <div className="swiper-button-next" role="button" aria-label="Next slide">Next<span></span></div>
    </section>
  );
};

export default Banner;