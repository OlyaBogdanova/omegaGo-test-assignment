import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import Slide from './Slide';
import './Slider.scss';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

type Props = {};

const Slider = (props: Props) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation={true}
            loop={true}
            pagination={true}>
            <SwiperSlide>
                <Slide />
            </SwiperSlide>
            <SwiperSlide>
                <Slide />
            </SwiperSlide>
            <SwiperSlide>
                <Slide />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
