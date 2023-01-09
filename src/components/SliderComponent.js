import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide>
                <div className="text-center">
                    <img
                        className="object-fit w-full h-50"
                        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2133BD48531C13BB0B"
                        alt="beautiful korean woman"
                    />
                        <h4>This opportunity is yours</h4>
                        <h2>Beauty Products</h2>
                        <h1>15% OFF ENTIRE STORE</h1>
                        <button className="btn-shop"> Shop Now 
                            </button>
                        <p>Save more with coupons & clearance</p>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="text-center">
                    <img
                        className="object-cover w-full h-50"
                        src="https://img.freepik.com/premium-photo/happy-asian-family-making-preparation-dough-bake-cookies-kitchen-home_74952-2348.jpg?w=1480"
                        alt="korean kitchen"
                    />
                        <h4>This opportunity is yours</h4>
                        <h2>Home Products</h2>
                        <h1>15% OFF ENTIRE STORE</h1>
                        <button className="btn-shop"> Shop Now 
                            </button>
                        <p>Save more with coupons & clearance</p>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="text-center">
                    <img
                        className="object-cover w-full h-50"
                        src="https://static01.nyt.com/images/2021/02/18/fashion/12KOREAN-HOMEBODIES-05/12KOREAN-HOMEBODIES-05-mobileMasterAt3x.jpg"
                        alt="korean mom"
                    />
                        <h4>This opportunity is yours</h4>
                        <h2>Household Products</h2>
                        <h1>15% OFF ENTIRE STORE</h1>
                        <button className="btn-shop"> Shop Now 
                            </button>
                        <p>Save more with coupons & clearance</p>
                    </div>
                </SwiperSlide>
            </Swiper>
</>
)};